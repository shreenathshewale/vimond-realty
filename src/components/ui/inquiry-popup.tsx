'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CheckCircle2 } from 'lucide-react';

interface InquiryPopupProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export function InquiryPopup({ isOpen, onClose, defaultProject }: InquiryPopupProps) {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px] bg-[#F7F5F2] border-[#D8D2C8] rounded-none p-12 text-center shadow-2xl z-[60]">
          <div className="flex flex-col items-center space-y-6">
            <CheckCircle2 className="w-16 h-16 text-[#8A7A63]" />
            <div className="space-y-2">
              <h2 className="text-3xl font-serif text-[#2B2B2B]">Thank you.</h2>
              <p className="text-sm font-light text-[#2B2B2B]/60 italic">
                Our team will contact you shortly to assist with your inquiry.
              </p>
            </div>
            <Button 
              onClick={() => { setIsSubmitted(false); onClose(); }}
              className="mt-4 w-full h-12 rounded-none bg-[#2B2B2B] text-white text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-[#8A7A63] transition-all"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-[#F7F5F2] border-[#D8D2C8] rounded-none p-0 overflow-hidden shadow-2xl z-[60]">
        <DialogHeader className="p-8 pb-0">
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#8A7A63] font-bold block mb-2">Inquiry</span>
          <DialogTitle className="text-3xl font-serif text-[#2B2B2B] leading-none">Begin your journey.</DialogTitle>
          <DialogDescription className="text-xs font-light text-[#2B2B2B]/40 italic pt-2">
            Please provide your details below to receive project information.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="space-y-4">
            <Input 
              required
              placeholder="FULL NAME" 
              className="h-12 border-0 border-b border-[#D8D2C8] bg-transparent rounded-none px-0 text-xs tracking-widest uppercase focus-visible:ring-0 focus-visible:border-[#8A7A63] transition-all placeholder:text-[#2B2B2B]/20"
            />
            <div className="grid grid-cols-2 gap-4">
              <Input 
                required
                type="tel"
                placeholder="PHONE NUMBER" 
                className="h-12 border-0 border-b border-[#D8D2C8] bg-transparent rounded-none px-0 text-xs tracking-widest uppercase focus-visible:ring-0 focus-visible:border-[#8A7A63] transition-all placeholder:text-[#2B2B2B]/20"
              />
              <Input 
                required
                type="email"
                placeholder="EMAIL ADDRESS" 
                className="h-12 border-0 border-b border-[#D8D2C8] bg-transparent rounded-none px-0 text-xs tracking-widest uppercase focus-visible:ring-0 focus-visible:border-[#8A7A63] transition-all placeholder:text-[#2B2B2B]/20"
              />
            </div>
            
            <Select defaultValue={defaultProject}>
              <SelectTrigger className="h-12 border-0 border-b border-[#D8D2C8] bg-transparent rounded-none px-0 text-xs tracking-widest uppercase focus:ring-0 focus:border-[#8A7A63] transition-all text-[#2B2B2B]/60">
                <SelectValue placeholder="INTERESTED PROJECT" />
              </SelectTrigger>
              <SelectContent className="bg-[#F7F5F2] border-[#D8D2C8] rounded-none">
                <SelectItem value="vivencia">Vivencia (Koregaon Park)</SelectItem>
                <SelectItem value="verista">Verïsta (Law College Road)</SelectItem>
                <SelectItem value="signature">Signature Tower II (Model Colony)</SelectItem>
                <SelectItem value="serenity">Serenity (Kothrud)</SelectItem>
                <SelectItem value="success-square">Success Square (Kothrud)</SelectItem>
                <SelectItem value="shivalik">Shivalik (Kothrud)</SelectItem>
              </SelectContent>
            </Select>

            <Textarea 
              placeholder="MESSAGE" 
              className="min-h-[100px] border-0 border-b border-[#D8D2C8] bg-transparent rounded-none px-0 text-xs tracking-widest uppercase focus-visible:ring-0 focus-visible:border-[#8A7A63] transition-all placeholder:text-[#2B2B2B]/20 resize-none"
            />
          </div>

          <Button 
            type="submit"
            className="w-full h-14 rounded-none bg-[#2B2B2B] text-white text-[10px] tracking-[0.5em] uppercase font-bold hover:bg-[#8A7A63] transition-all shadow-lg"
          >
            Submit Inquiry
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
