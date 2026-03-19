import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Quantum Assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const quickReplies = [
    { id: 'pricing', label: 'Pricing', icon: '💰' },
    { id: 'timeline', label: 'Timeline / Turnaround', icon: '⏱️' },
    { id: 'services', label: 'Services we offer', icon: '🚀' },
    { id: 'quote', label: 'Get a Quote', icon: '📋' },
    { id: 'portfolio', label: 'Portfolio / Examples', icon: '🎨' },
  ];

  const handleQuickReply = (replyId: string) => {
    let responseText = '';
    let userText = '';

    switch (replyId) {
      case 'pricing':
        userText = 'What is your pricing?';
        responseText = "Our pricing is competitive and tailored to your needs. Basic websites start at $500, e-commerce sites from $1,500, and custom applications are quoted individually. Call us at (863) 276-2414 for a free consultation!";
        break;
      case 'timeline':
        userText = 'What is your timeline?';
        responseText = "Most projects take 2-4 weeks depending on complexity. Simple websites can be done in 1-2 weeks, while e-commerce and custom apps may take 3-6 weeks. We'll give you an exact timeline during consultation.";
        break;
      case 'services':
        userText = 'What services do you offer?';
        responseText = "We offer: Custom Web Design, E-commerce Solutions, SEO Optimization, Mobile-Responsive Design, Website Maintenance, and Custom Web Applications. Visit our Services page for details!";
        break;
      case 'quote':
        userText = 'I want a quote';
        responseText = "Great! To provide an accurate quote, we'd love to discuss your project. Call us at (863) 276-2414 or fill out our Contact form with your project details. We'll get back to you within 24 hours!";
        break;
      case 'portfolio':
        userText = 'Show me your portfolio';
        responseText = "Check out our Portfolio page to see our recent projects! We've built stunning websites for businesses across industries - from sleek landing pages to full e-commerce platforms. Each project showcases our commitment to quality and performance.";
        break;
    }

    const userMessage: Message = {
      id: messages.length + 1,
      text: userText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: responseText,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (input.includes('price') || input.includes('cost') || input.includes('pricing')) {
      return "Our pricing is competitive and tailored to your needs. Basic websites start at $500, e-commerce sites from $1,500, and custom applications are quoted individually. Call us at (863) 276-2414 for a free consultation!";
    }
    if (input.includes('service') || input.includes('what do you do')) {
      return "We offer: Custom Web Design, E-commerce Solutions, SEO Optimization, Mobile-Responsive Design, Website Maintenance, and Custom Web Applications. Visit our Services page for details!";
    }
    if (input.includes('contact') || input.includes('reach') || input.includes('call')) {
      return "You can reach us at (863) 276-2414 or through our Contact page. We're here to help!";
    }
    if (input.includes('portfolio') || input.includes('work') || input.includes('examples')) {
      return "Check out our Portfolio page to see our recent projects! We've built stunning websites for businesses across industries - from sleek landing pages to full e-commerce platforms.";
    }
    if (input.includes('time') || input.includes('how long') || input.includes('duration') || input.includes('timeline')) {
      return "Most projects take 2-4 weeks depending on complexity. Simple websites can be done in 1-2 weeks, while e-commerce and custom apps may take 3-6 weeks. We'll give you an exact timeline during consultation.";
    }
    if (input.includes('quote')) {
      return "To provide an accurate quote, we'd love to discuss your project. Call us at (863) 276-2414 or fill out our Contact form. We'll get back to you within 24 hours!";
    }
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello! How can I assist you with your web design needs today?";
    }

    return "Thanks for your message! For specific questions, feel free to call us at (863) 276-2414 or visit our Contact page.";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] ${isMinimized ? 'h-auto' : 'h-[500px]'} bg-navy border-2 border-cyan/30 rounded-2xl shadow-2xl shadow-cyan/20 flex flex-col`}
            style={{ zIndex: 60 }}
          >
            <div className="bg-gradient-to-r from-cyan to-cyan/80 p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h3 className="font-bold text-navy">Quantum Assistant</h3>
                  <p className="text-xs text-navy/80">Online</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-navy/20 rounded-lg transition-colors"
                  aria-label="Minimize chat"
                >
                  <Minus className="w-5 h-5 text-navy" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-navy/20 rounded-lg transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5 text-navy" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl ${
                          message.sender === 'user'
                            ? 'bg-cyan text-navy rounded-br-sm'
                            : 'bg-white/10 text-white rounded-bl-sm'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                    </div>
                  ))}

                  {messages.length === 1 && (
                    <div className="space-y-2 mt-4">
                      <p className="text-xs text-neutral text-center mb-3">Quick replies:</p>
                      <div className="grid grid-cols-1 gap-2">
                        {quickReplies.map((reply) => (
                          <button
                            key={reply.id}
                            onClick={() => handleQuickReply(reply.id)}
                            className="bg-white/5 hover:bg-cyan/20 border border-cyan/30 hover:border-cyan text-white text-sm py-2 px-3 rounded-lg transition-all duration-200 text-left flex items-center space-x-2"
                          >
                            <span>{reply.icon}</span>
                            <span>{reply.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                <div className="p-4 border-t border-cyan/20">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 bg-white/10 border border-cyan/30 rounded-lg px-4 py-2 text-white placeholder-neutral focus:outline-none focus:border-cyan transition-colors"
                    />
                    <button
                      onClick={handleSend}
                      disabled={!inputValue.trim()}
                      className="bg-gradient-to-r from-cyan to-cyan/80 hover:from-cyan hover:to-cyan text-navy px-4 py-2 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Send message"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
          setIsMinimized(false);
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan to-cyan/80 hover:from-cyan hover:to-cyan text-navy w-14 h-14 rounded-full shadow-lg shadow-cyan/30 hover:shadow-cyan/50 transition-all duration-300 flex items-center justify-center group"
        aria-label="Toggle chat"
        style={{ zIndex: 60 }}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        )}
      </motion.button>
    </>
  );
}
