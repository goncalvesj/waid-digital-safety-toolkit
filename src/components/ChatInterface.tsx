import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
// Switched from deprecated Phosphor icons to maintained Lucide icons
import { ArrowLeft, Send, MessageCircleMore, Bot, User, Settings, PhoneCall } from 'lucide-react';
import { toast } from 'sonner';
import { azureAIService, initializeAzureAI } from '@/lib/azureAI';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

interface ChatInterfaceProps {
  onBack: () => void;
}

export function ChatInterface({ onBack }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi, I'm your digital safety assistant. You can speak to me just like you would to a trusted, informed friend. Nothing you type here is saved or stored anywhere. Whether you're worried about someone checking your phone, accounts feeling unsafe, or something else that's on your mind—I'm here to help. What would you like to talk about first?",
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isConfigured, setIsConfigured] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Azure AI service - in production, configuration would come from environment variables
    const configured = initializeAzureAI();
    setIsConfigured(configured);
    
    if (!configured) {
      console.warn('Azure AI not configured - using fallback responses');
    }
  }, []);

  useEffect(() => {
    // Auto-scroll to bottom when new messages are added
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      let response: string;
      
      if (isConfigured && azureAIService.isConfigured()) {
        // Use Azure AI service with conversation history
        const conversationHistory = messages.map(msg => ({
          content: msg.content,
          sender: msg.sender
        }));
        
        response = await azureAIService.getGuidance(userMessage.content, conversationHistory);
      } else {
        // Fallback to mock responses if Azure AI is not configured
        response = generateMockResponse(userMessage.content);
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
      }
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      toast.error('I apologize, but I\'m having trouble connecting right now. Please try again or use the questionnaire for immediate guidance.');
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I apologize, but I'm experiencing technical difficulties. For immediate guidance, please try using our interactive questionnaire or contact Women's Aid directly at 1800 341 900 (24/7).",
        sender: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Back to Menu
        </Button>
      </div>

      <Card className="border-primary/20">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <MessageCircleMore size={20} className="text-primary" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-xl">Private safety chat</CardTitle>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-sm text-muted-foreground">
                  Private, confidential guidance for digital safety concerns
                </p>
                <div className={`w-2 h-2 rounded-full ${isConfigured ? 'bg-green-500' : 'bg-yellow-500'}`} title={isConfigured ? 'AI Service Connected' : 'Using Offline Mode'} />
              </div>
            </div>
            {!isConfigured && (
              <div className="text-xs text-muted-foreground flex items-center gap-1">
                <Settings size={12} />
                Offline Mode
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="bg-muted/30 p-4 rounded-lg border border-primary/10">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
                <span className="text-destructive text-xs font-bold">!</span>
              </div>
              <div className="text-sm">
                <p className="font-medium text-foreground mb-1">You're safe to chat here</p>
                <p className="text-muted-foreground leading-relaxed">
                  Nothing you write is saved or stored. If someone might be watching, you can use the Quick Exit at any time. If you are in immediate danger, call emergency services (999) or tap the helpline below for Women's Aid (24/7 confidential support).
                </p>
                <div className="mt-3">
                  <a
                    href="tel:1800341900"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-destructive/10 text-destructive font-semibold text-sm hover:bg-destructive/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-destructive transition-colors"
                    aria-label="Call Women's Aid National Freephone Helpline on 1 800 341 900 (opens phone dialer)"
                  >
                    <PhoneCall size={16} />
                    Women's Aid 1800 341 900
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Card className="min-h-[400px] flex flex-col">
            <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.sender === 'assistant' && (
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Bot size={16} className="text-primary" />
                      </div>
                    )}
                    
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted border'
                      }`}
                    >
                      {message.sender === 'assistant' ? (
                        <div className="text-sm">
                          <ReactMarkdown 
                            components={{
                              // Customize markdown rendering for safety context
                              strong: ({children}) => <span className="font-semibold text-foreground">{children}</span>,
                              em: ({children}) => <span className="italic">{children}</span>,
                              ul: ({children}) => <ul className="list-disc list-inside space-y-1 my-2">{children}</ul>,
                              li: ({children}) => <li className="text-sm">{children}</li>,
                              p: ({children}) => <p className="text-sm mb-2 last:mb-0">{children}</p>,
                            }}
                          >
                            {message.content}
                          </ReactMarkdown>
                        </div>
                      ) : (
                        <p className="text-sm whitespace-pre-wrap break-words text-primary-foreground">
                          {message.content}
                        </p>
                      )}
                      <p className={`text-xs mt-2 ${
                        message.sender === 'user' 
                          ? 'text-primary-foreground/70' 
                          : 'text-muted-foreground'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>

                    {message.sender === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                        <User size={16} className="text-secondary-foreground" />
                      </div>
                    )}
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex gap-3 justify-start">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Bot size={16} className="text-primary" />
                    </div>
                    <div className="bg-muted border p-3 rounded-lg">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type whatever's on your mind... (Press Enter to send)"
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  size="icon"
                >
                  <Send size={16} />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                I don't keep history. For sensitive steps (like changing passwords) consider using a device the abuser can't access.
              </p>
            </div>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}

// Fallback mock response generator for when Azure AI is not configured
function generateMockResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase();
  
  if (lowerMessage.includes('spyware') || lowerMessage.includes('monitoring') || lowerMessage.includes('tracking')) {
    return `I understand your concern about potential monitoring. Here are some **immediate steps**:

- If you suspect spyware, use a different device (at a library, friend's house, or public computer) for sensitive communications
- Don't search for "spyware removal" on the suspected device as this might alert the person monitoring
- Consider preserving the device as evidence if you plan to involve authorities
- For immediate safety: **Women's Aid Helpline 1800 341 900 (24/7)**

Your safety is the priority. Would you like specific guidance on any of these steps?`;
  }
  
  if (lowerMessage.includes('hack') || lowerMessage.includes('password') || lowerMessage.includes('account')) {
    return `If you think your accounts have been compromised:

**Immediate Actions:**
- Change passwords immediately using a secure device
- Enable two-factor authentication where possible
- Check recent login activity in your account settings
- Inform trusted contacts that your account may have been compromised
- Use different, strong passwords for each account

Would you like me to walk you through securing any specific type of account?`;
  }
  
  if (lowerMessage.includes('image') || lowerMessage.includes('photo') || lowerMessage.includes('video') || lowerMessage.includes('intimate')) {
    return `I'm sorry this has happened to you. Image-based sexual abuse is a crime in Ireland:

**Immediate Steps:**
- Report to hotline.ie for intimate image abuse
- Report the content on the platform where it appears
- Take screenshots as evidence (include URLs)
- Contact An Garda Síochána as this is a criminal matter
- **Women's Aid** can provide ongoing support: **1800 341 900**

You have rights under data protection law to request removal. Would you like specific guidance on any of these steps?`;
  }
  
  if (lowerMessage.includes('social media') || lowerMessage.includes('facebook') || lowerMessage.includes('instagram')) {
    return `Here are key privacy settings for social media safety:

**Privacy Steps:**
- Make your profiles private so only approved followers can see your content
- Review and remove followers you don't trust
- Turn off location sharing and activity status
- Use blocking features for abusive contacts
- Regularly review your privacy settings as platforms change them

Which social media platform would you like specific guidance for?`;
  }
  
  if (lowerMessage.includes('harassment') || lowerMessage.includes('abuse') || lowerMessage.includes('threat')) {
    return `Online harassment is serious and you don't have to face it alone:

**Documentation Steps:**
- Document everything - take screenshots with timestamps
- Report abusive content using platform tools
- Block the harassing accounts
- If threats involve violence, contact Gardaí immediately
- **Women's Aid** provides specialized support: **1800 341 900**

*Remember: this is not your fault, and help is available.* Would you like guidance on documenting evidence or using platform reporting tools?`;
  }
  
  return `Thank you for reaching out. I'm here to help with digital safety concerns including:

**Areas I can help with:**
- Account security and password protection
- Privacy settings on social media
- Dealing with online harassment
- Spyware and monitoring concerns
- Image-based abuse
- Safe internet and phone usage

Could you tell me more about your specific situation so I can provide the most relevant guidance? 

*Remember, if you're in immediate danger, contact emergency services or Women's Aid: **1800 341 900**.*`;
}
