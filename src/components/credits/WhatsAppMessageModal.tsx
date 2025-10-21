import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WhatsAppMessageModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  customer: {
    name: string;
    phone?: string;
    currentBalance: number;
  };
}

export const WhatsAppMessageModal = ({
  open,
  onOpenChange,
  customer
}: WhatsAppMessageModalProps) => {
  const { toast } = useToast();
  const defaultMessage = `Dear ${customer.name}, your outstanding balance is PKR ${(customer.currentBalance || 0).toLocaleString()}. Please clear your dues at the earliest. Thank you!`;
  
  const [message, setMessage] = useState(defaultMessage);

  const handleSend = () => {
    const phone = customer.phone?.replace(/[^0-9]/g, '');
    
    if (!phone) {
      toast({
        title: "No Phone Number",
        description: "This customer doesn't have a phone number",
        variant: "destructive"
      });
      return;
    }

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Opening WhatsApp",
      description: `Opening WhatsApp chat with ${customer.name}`,
    });
    
    onOpenChange(false);
  };

  // Reset message when modal opens
  const handleOpenChange = (newOpen: boolean) => {
    if (newOpen) {
      setMessage(defaultMessage);
    }
    onOpenChange(newOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Send WhatsApp Message to {customer.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="whatsapp-message">Message</Label>
            <Textarea
              id="whatsapp-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="mt-2"
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleSend}
              className="bg-green-600 hover:bg-green-700"
            >
              <Send className="h-4 w-4 mr-2" />
              Send via WhatsApp
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
