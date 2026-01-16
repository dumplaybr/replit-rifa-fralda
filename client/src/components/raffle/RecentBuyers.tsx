import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Buyer {
  id: string;
  name: string;
  tickets: number;
  time: string;
  avatar?: string;
}

const MOCK_BUYERS: Buyer[] = [
  { id: "1", name: "Ana Silva", tickets: 5, time: "2 min atrás", avatar: "AS" },
  { id: "2", name: "João Souza", tickets: 2, time: "5 min atrás", avatar: "JS" },
  { id: "3", name: "Maria Oliveira", tickets: 10, time: "12 min atrás", avatar: "MO" },
  { id: "4", name: "Pedro Santos", tickets: 3, time: "25 min atrás", avatar: "PS" },
  { id: "5", name: "Carla Dias", tickets: 1, time: "1 hora atrás", avatar: "CD" },
];

export function RecentBuyers() {
  return (
    <div className="w-full max-w-md mx-auto bg-white/50 backdrop-blur-sm rounded-3xl p-6 border border-white/60 shadow-sm">
      <h3 className="text-xl font-display text-foreground mb-4 text-center">Últimos Compradores ❤️</h3>
      <div className="space-y-3">
        {MOCK_BUYERS.map((buyer, index) => (
          <motion.div
            key={buyer.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-3 bg-white rounded-2xl shadow-sm border border-slate-50"
          >
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border-2 border-secondary/20 bg-secondary/10 text-secondary-foreground font-bold font-display">
                <AvatarFallback>{buyer.avatar}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold text-sm text-foreground">{buyer.name}</p>
                <p className="text-xs text-muted-foreground">Comprou {buyer.tickets} números</p>
              </div>
            </div>
            <span className="text-xs font-medium text-accent-foreground bg-accent/20 px-2 py-1 rounded-full">
              {buyer.time}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
