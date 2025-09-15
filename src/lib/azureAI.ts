// Azure AI Agent Integration
// This file provides the integration layer for connecting to Azure AI services
// while maintaining privacy and security for the Women's Aid digital safety toolkit

import dataContent from '@/assets/documents/data.md?raw';

// Configuration interface for Azure AI Agent
interface AzureAIConfig {
  endpoint: string;
  apiKey: string;
  deploymentName?: string;
  apiVersion?: string;
}

// Message structure for Azure AI communication
interface AzureAIMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

// Response structure from Azure AI
interface AzureAIResponse {
  choices: Array<{
    message: {
      content: string;
      role: string;
    };
  }>;
}

class AzureAIService {
  private config: AzureAIConfig | null = null;
  private systemPrompt: string;

  constructor() {
    // System prompt that includes the data.md content as context
    this.systemPrompt = `You are a specialized digital safety assistant for Women's Aid Ireland, designed to provide confidential, supportive guidance to women experiencing digital abuse or harassment. Your responses should be:

1. EMPATHETIC: Always acknowledge the user's feelings and validate their concerns
2. SAFETY-FOCUSED: Prioritize immediate safety over technical solutions
3. PRIVATE: Remind users this conversation is confidential and not stored
4. ACTIONABLE: Provide specific, practical steps they can take
5. SUPPORTIVE: Encourage users to seek additional help when needed

KNOWLEDGE BASE:
${dataContent}

CRITICAL GUIDELINES:
- If someone is in immediate danger, direct them to emergency services or Women's Aid: 1800 341 900
- Always mention that conversations are private and not stored/tracked
- Provide specific, actionable advice based on the knowledge base
- Be sensitive to trauma and avoid requiring detailed descriptions of abuse
- Encourage professional support when appropriate
- Focus on empowerment and user agency
- Use Irish context (Gardaí, Irish law, etc.) as provided in the knowledge base

Remember: You are providing support and guidance, not legal advice. Always recommend professional help for complex situations.`;
  }

  // Initialize the service with Azure configuration
  configure(config: AzureAIConfig) {
    this.config = config;
  }

  // Check if the service is properly configured
  isConfigured(): boolean {
    return this.config !== null && 
           !!this.config.endpoint && 
           !!this.config.apiKey;
  }

  // Send a message to Azure AI Agent and get response
  async sendMessage(userMessage: string, conversationHistory: AzureAIMessage[] = []): Promise<string> {
    if (!this.isConfigured()) {
      throw new Error('Azure AI service not configured. Please provide endpoint and API key.');
    }

    try {
      // Construct the conversation with system prompt and history
      const messages: AzureAIMessage[] = [
        { role: 'system', content: this.systemPrompt },
        ...conversationHistory,
        { role: 'user', content: userMessage }
      ];

      // Prepare the request
      const requestBody = {
        messages,
        max_tokens: 1000,
        temperature: 0.7,
        top_p: 0.9,
        frequency_penalty: 0,
        presence_penalty: 0,
        stream: false
      };

      const response = await fetch(`${this.config!.endpoint}/openai/deployments/${this.config!.deploymentName || 'gpt-4'}/chat/completions?api-version=${this.config!.apiVersion || '2024-02-15-preview'}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': this.config!.apiKey,
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Azure AI API Error:', errorData);
        throw new Error(`Azure AI API request failed: ${response.status} ${response.statusText}`);
      }

      const data: AzureAIResponse = await response.json();
      
      if (!data.choices || data.choices.length === 0) {
        throw new Error('No response generated from Azure AI');
      }

      return data.choices[0].message.content;

    } catch (error) {
      console.error('Error calling Azure AI:', error);
      
      // Return a helpful fallback message if the service fails
      if (error instanceof Error && error.message.includes('fetch')) {
        return "I'm sorry, I'm having trouble connecting to our support system right now. For immediate assistance, please:\n\n• Contact Women's Aid Helpline: 1800 341 900 (24/7)\n• Try our interactive questionnaire\n• If in immediate danger, contact emergency services\n\nYour safety is our priority.";
      }
      
      throw error;
    }
  }

  // Get a context-aware response based on the user's message
  async getGuidance(userMessage: string, previousMessages: { content: string; sender: 'user' | 'assistant' }[] = []): Promise<string> {
    // Convert message history to Azure AI format (keeping last 10 messages for context)
    const conversationHistory: AzureAIMessage[] = previousMessages
      .slice(-10) // Keep only recent context to avoid token limits
      .map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.content
      }));

    return await this.sendMessage(userMessage, conversationHistory);
  }
}

// Create and export a singleton instance
export const azureAIService = new AzureAIService();

// Helper function to initialize Azure AI with environment variables or configuration
export function initializeAzureAI(config?: Partial<AzureAIConfig>) {
  // In a real implementation, you would get these from environment variables
  // For development, they could be passed in or loaded from a secure configuration
  const azureConfig: AzureAIConfig = {
    endpoint: config?.endpoint || process.env.VITE_AZURE_OPENAI_ENDPOINT || '',
    apiKey: config?.apiKey || process.env.VITE_AZURE_OPENAI_API_KEY || '',
    deploymentName: config?.deploymentName || process.env.VITE_AZURE_OPENAI_DEPLOYMENT_NAME || 'gpt-4',
    apiVersion: config?.apiVersion || process.env.VITE_AZURE_OPENAI_API_VERSION || '2024-02-15-preview'
  };

  azureAIService.configure(azureConfig);
  
  return azureAIService.isConfigured();
}

// Type definitions for external use
export type { AzureAIConfig, AzureAIMessage };
export { AzureAIService };