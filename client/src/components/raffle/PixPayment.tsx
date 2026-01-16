import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface PixPaymentProps {
  total: number;
  onConfirm: () => void;
}

export function PixPayment({ total, onConfirm }: PixPaymentProps) {
  const [copied, setCopied] = useState(false);
  const pixCode = "00020126580014BR.GOV.BCB.PIX0136e3a45c7a-5d4b-4b2a-8d5e-7a4c5b6d7e8f5204000053039865405" + total.toFixed(2) + "5802BR5913Rifa do Bebe6009Sao Paulo62070503***6304E2B1";

  const handleCopy = () => {
    navigator.clipboard.writeText(pixCode);
    setCopied(true);
    toast.success("Código PIX copiado!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-4 space-y-6">
      <div className="flex flex-col items-center gap-4">
        <div className="bg-white p-4 rounded-3xl border-2 border-slate-100 shadow-sm">
          {/* Placeholder for QR Code */}
          <div className="w-48 h-48 bg-slate-50 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200">
            <QrCode className="w-32 h-32 text-slate-300" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">QR Code Mockup</span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-1">Valor do PIX</p>
          <p className="text-3xl font-display font-bold text-primary">R$ {total.toFixed(2)}</p>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest text-center">Pix Copia e Cola</p>
        <div className="relative">
          <div className="bg-slate-50 p-4 pr-12 rounded-xl border border-slate-200 text-[10px] font-mono break-all line-clamp-2 text-slate-500">
            {pixCode}
          </div>
          <Button
            size="icon"
            variant="ghost"
            onClick={handleCopy}
            className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-white"
          >
            {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      <div className="pt-4">
        <Button 
          onClick={onConfirm}
          className="w-full h-14 rounded-xl text-lg font-bold bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-200"
        >
          Já paguei!
        </Button>
        <p className="text-[10px] text-center text-muted-foreground mt-3 uppercase tracking-tighter">
          O sistema confirmará seu pagamento automaticamente após o clique
        </p>
      </div>
    </div>
  );
}
