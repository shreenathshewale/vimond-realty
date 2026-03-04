'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { aiInquiryAssistant } from '@/ai/flows/ai-inquiry-assistant-flow';
import { Bot, Send, User, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function AIAssistant() {
  const [question, setQuestion] = React.useState('');
  const [chat, setChat] = React.useState<{ type: 'user' | 'ai'; content: string }[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || isLoading) return;

    const userQuestion = question;
    setQuestion('');
    setChat((prev) => [...prev, { type: 'user', content: userQuestion }]);
    setIsLoading(true);

    try {
      const result = await aiInquiryAssistant({
        question: userQuestion,
        companyNarrative: "ViMond Realty is a modern real estate brand based in Pune. We focus on intelligent luxury, high standards in architecture, and world-class design in prime locations like Koregaon Park, Model Colony, and Law College Road.",
        projects: "Vivencia in Koregaon Park, Signature Tower II in Model Colony, and Verïsta in Law College Road.",
        faqs: "We cover development processes, property details, and purchasing options.",
      });
      setChat((prev) => [...prev, { type: 'ai', content: result.answer }]);
    } catch (error) {
      setChat((prev) => [...prev, { type: 'ai', content: "I'm sorry, I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-card shadow-xl overflow-hidden border-accent/20">
      <CardHeader className="bg-primary text-white">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-accent rounded-full">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <CardTitle>ViMond Assistant</CardTitle>
            <CardDescription className="text-white/70">Ask me anything about our projects or philosophy.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[400px] overflow-y-auto p-4 flex flex-col gap-4 bg-muted/30">
          {chat.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-2">
              <p>How can I help you today?</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['About Vivencia', 'Intelligent Luxury', 'Current Locations'].map((text) => (
                  <button
                    key={text}
                    onClick={() => setQuestion(text)}
                    className="text-xs bg-white border px-3 py-1.5 rounded-full hover:bg-accent/10 transition-colors"
                  >
                    {text}
                  </button>
                ))}
              </div>
            </div>
          )}
          {chat.map((msg, i) => (
            <div
              key={i}
              className={cn(
                "flex items-start gap-3 max-w-[85%]",
                msg.type === 'user' ? "ml-auto flex-row-reverse" : ""
              )}
            >
              <div className={cn(
                "p-2 rounded-full",
                msg.type === 'user' ? "bg-accent" : "bg-primary"
              )}>
                {msg.type === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
              </div>
              <div className={cn(
                "p-3 rounded-lg text-sm",
                msg.type === 'user' ? "bg-accent text-white rounded-tr-none" : "bg-white border rounded-tl-none"
              )}>
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-primary">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="p-3 bg-white border rounded-lg rounded-tl-none">
                <Loader2 className="w-4 h-4 animate-spin text-primary" />
              </div>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="p-4 border-t bg-white flex gap-2">
          <Input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question..."
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={isLoading} className="bg-primary text-white">
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
