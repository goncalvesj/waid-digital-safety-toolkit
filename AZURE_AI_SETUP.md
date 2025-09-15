# Azure AI Integration Setup

This document explains how to configure the Azure AI Agent integration for the Women's Aid Digital Safety Toolkit.

## Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# Azure OpenAI Configuration
VITE_AZURE_OPENAI_ENDPOINT=https://your-resource-name.openai.azure.com
VITE_AZURE_OPENAI_API_KEY=your-api-key-here
VITE_AZURE_OPENAI_DEPLOYMENT_NAME=gpt-4
VITE_AZURE_OPENAI_API_VERSION=2024-02-15-preview
```

## Azure Setup Required

1. **Create Azure OpenAI Resource**
   - Go to Azure Portal
   - Create a new Azure OpenAI resource
   - Deploy a model (recommended: GPT-4 or GPT-4 Turbo)

2. **Get Configuration Values**
   - **Endpoint**: Found in Azure Portal under your OpenAI resource "Endpoint" field
   - **API Key**: Found under "Keys and Endpoint" section
   - **Deployment Name**: The name you gave to your deployed model
   - **API Version**: Use the latest available (2024-02-15-preview recommended)

3. **Security Considerations**
   - Never commit API keys to version control
   - Use environment variables in production
   - Consider using Azure Key Vault for production deployments
   - Implement proper CORS policies
   - Monitor API usage and set spending limits

## Features Provided

When properly configured, the AI assistant will:

- Use the content from `data.md` as its knowledge base
- Provide contextually appropriate responses for digital safety scenarios
- Maintain conversation context across multiple messages
- Follow specialized prompts designed for trauma-informed support

## Fallback Behavior

If Azure AI is not configured:
- The chat interface will show "Offline Mode"
- A yellow status indicator will be displayed
- Mock responses based on common patterns will be provided
- Users will be directed to the questionnaire and Women's Aid helpline

## Testing the Integration

1. Set up the environment variables
2. Restart the development server
3. Navigate to the chat interface
4. Look for the green status indicator showing "AI Service Connected"
5. Test with messages like "I think someone is monitoring my phone"

## Data Privacy

The integration is designed with privacy in mind:
- No conversation data is stored locally
- Messages are not logged or persisted
- Each conversation is independent
- Azure OpenAI follows Microsoft's data privacy policies
- The system prompt emphasizes confidentiality and appropriate boundaries

## Customizing the AI Behavior

To modify the AI's responses, edit the `systemPrompt` in `/src/lib/azureAI.ts`. The prompt includes:
- Empathy and trauma-informed language guidelines
- The complete knowledge base from data.md
- Irish-specific context (Gardaí, Women's Aid contact info)
- Safety-first approach to recommendations

## Production Deployment

For production use:
- Use Azure Key Vault for secrets management
- Implement proper authentication if required
- Set up monitoring and logging
- Configure appropriate CORS policies
- Consider implementing rate limiting
- Ensure compliance with data protection requirements