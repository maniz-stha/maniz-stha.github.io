import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendChatMessage } from '../utils/api';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  isError?: boolean;
}

const generateSessionId = (): string => {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return 'session_' + Math.random().toString(36).substring(2, 15) + '_' + Date.now().toString(36);
};

export const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [sessionId, setSessionId] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Initialize Session and History
  useEffect(() => {
    // Get or generate session ID
    let storedSessionId = localStorage.getItem('portfolio_chat_session_id');
    if (!storedSessionId) {
      storedSessionId = generateSessionId();
      localStorage.setItem('portfolio_chat_session_id', storedSessionId);
    }
    setSessionId(storedSessionId);

    // Load message history from local storage
    const storedHistory = localStorage.getItem('portfolio_chat_history');
    if (storedHistory) {
      try {
        setMessages(JSON.parse(storedHistory));
      } catch (e) {
        console.error('Failed to parse chat history', e);
        loadDefaultGreeting();
      }
    } else {
      loadDefaultGreeting();
    }
  }, []);

  const loadDefaultGreeting = () => {
    const defaultGreeting: Message = {
      id: 'greeting',
      sender: 'assistant',
      text: "Hi! I'm Manish's AI Assistant. Ask me anything about his skills, experience, projects, or how to get in touch!",
      timestamp: new Date().toISOString(),
    };
    setMessages([defaultGreeting]);
    localStorage.setItem('portfolio_chat_history', JSON.stringify([defaultGreeting]));
  };

  // Save history to local storage whenever it changes
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('portfolio_chat_history', JSON.stringify(messages));
    }
  }, [messages]);

  // Scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen || messages.length > 0) {
      scrollToBottom();
    }
  }, [messages, isOpen, isLoading]);

  // Focus input when chat window opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Show tooltip hint after 2.5 seconds if never dismissed before
  useEffect(() => {
    const isDismissed = localStorage.getItem('portfolio_chat_tooltip_dismissed');
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismissTooltip = () => {
    setShowTooltip(false);
    localStorage.setItem('portfolio_chat_tooltip_dismissed', 'true');
  };

  const handleToggleOpen = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (nextState) {
      dismissTooltip();
    }
  };

  // Auto-grow textarea height on value change
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 120)}px`;
    }
  }, [input]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend(e);
    }
  };

  const handleSend = async (e?: React.SyntheticEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessageText = input.trim();
    setInput('');
    
    // Add user message
    const userMessage: Message = {
      id: generateSessionId(),
      sender: 'user',
      text: userMessageText,
      timestamp: new Date().toISOString(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const result = await sendChatMessage(userMessageText, sessionId);
      
      const assistantMessage: Message = {
        id: generateSessionId(),
        sender: 'assistant',
        text: result.response,
        timestamp: new Date().toISOString(),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: generateSessionId(),
        sender: 'assistant',
        text: "I'm having trouble connecting to my brain right now. Please make sure the AI assistant service is running and try again.",
        timestamp: new Date().toISOString(),
        isError: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Tooltip Speech Bubble */}
      <AnimatePresence>
        {!isOpen && showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.3 }}
            onClick={handleToggleOpen}
            className="fixed bottom-24 right-6 z-[60] bg-white dark:bg-slate-900 border border-neutral-200/80 dark:border-slate-800/80 rounded-xl px-4 py-2.5 shadow-xl max-w-[240px] text-xs text-slate-700 dark:text-slate-200 cursor-pointer hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors duration-200"
          >
            <div className="pr-4 leading-relaxed font-semibold">
              Hi! Ask my AI assistant about my background, skills, and projects!
            </div>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                dismissTooltip();
              }}
              className="absolute top-1.5 right-1.5 text-neutral-400 hover:text-neutral-600 dark:text-gray-500 dark:hover:text-gray-300 p-0.5 rounded transition-colors"
              aria-label="Dismiss hint"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Little pointer triangle */}
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white dark:bg-slate-900 border-r border-b border-neutral-200/80 dark:border-slate-800/80 transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Bubble Button */}
      <motion.button
        onClick={handleToggleOpen}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-[60] flex items-center justify-center text-white focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle AI Assistant"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.div
                key="chat-icon"
                initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* Robot Head */}
                  <rect x="4" y="8" width="16" height="12" rx="3" strokeWidth={2} />
                  {/* Antenna */}
                  <path d="M12 8V4m0 0a1 1 0 100-2 1 1 0 000 2z" strokeWidth={2} strokeLinecap="round" />
                  {/* Ears/Bolts */}
                  <path d="M4 14H2m18 0h2" strokeWidth={2} strokeLinecap="round" />
                  {/* Eyes */}
                  <circle cx="9" cy="13.5" r="1.5" fill="currentColor" />
                  <circle cx="15" cy="13.5" r="1.5" fill="currentColor" />
                  {/* Smiling mouth */}
                  <path d="M9 16.5c1 1.2 5 1.2 6 0" strokeWidth={2} strokeLinecap="round" />
                </svg>
              </motion.div>
            ) : (
              <motion.div
                key="close-icon"
                initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -45, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
          {/* Subtle animated notification dot if closed */}
          {!isOpen && messages.length <= 1 && (
            <span className="absolute top-0 right-0 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
          )}
        </div>
      </motion.button>

      {/* Chat Window Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50, originX: 0.9, originY: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50, originX: 0.9, originY: 0.9 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-2rem)] h-[550px] max-h-[calc(100vh-8rem)] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-neutral-200/60 dark:border-slate-800/60 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md z-[60]"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <div className="relative bg-white/20 p-1.5 rounded-xl backdrop-blur-sm">
                  {/* Glowing Bot Icon */}
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="absolute -bottom-0.5 -right-0.5 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm tracking-wide">AI Assistant</h3>
                  <p className="text-[10px] text-indigo-100 font-light">Online • Ask anything about Manish</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg"
                aria-label="Close Chat"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Message History */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#fdfdfd]/50 dark:bg-slate-900/30">
              {messages.map((msg) => {
                const isUser = msg.sender === 'user';
                return (
                  <div
                    key={msg.id}
                    className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm shadow-sm leading-relaxed ${
                        isUser
                          ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-br-none'
                          : msg.isError
                          ? 'bg-red-50/90 dark:bg-red-950/30 text-red-600 dark:text-red-400 border border-red-200/50 dark:border-red-900/50 rounded-bl-none'
                          : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-neutral-100 dark:border-slate-700/50 rounded-bl-none'
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                      <span
                        className={`text-[9px] block text-right mt-1.5 font-light ${
                          isUser ? 'text-indigo-200' : 'text-neutral-400 dark:text-gray-500'
                        }`}
                      >
                        {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Thinking/Loading Indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-slate-800 border border-neutral-100 dark:border-slate-700/50 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                    <div className="flex items-center gap-1">
                      <motion.span
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        className="w-1.5 h-1.5 bg-neutral-400 dark:bg-gray-400 rounded-full"
                      />
                      <motion.span
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }}
                        className="w-1.5 h-1.5 bg-neutral-400 dark:bg-gray-400 rounded-full"
                      />
                      <motion.span
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
                        className="w-1.5 h-1.5 bg-neutral-400 dark:bg-gray-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={handleSend}
              className="p-3 border-t border-neutral-200/50 dark:border-slate-800/60 bg-white dark:bg-slate-950 flex gap-2 items-end"
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask something about Manish..."
                disabled={isLoading}
                rows={1}
                className="flex-1 px-4 py-2.5 text-sm bg-neutral-50 dark:bg-slate-900 border border-neutral-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:focus:ring-indigo-500/30 text-slate-800 dark:text-slate-100 placeholder-neutral-400 dark:placeholder-gray-500 disabled:opacity-50 resize-none overflow-y-auto leading-normal min-h-[40px] max-h-[120px] scrollbar-none"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-200"
                aria-label="Send Message"
              >
                <svg className="w-5 h-5 transform rotate-90" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
