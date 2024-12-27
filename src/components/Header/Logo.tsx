import React from 'react';
import { Brain } from 'lucide-react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Brain className="h-8 w-8 text-indigo-600" />
      <span className="ml-2 text-xl font-bold">smarttalks.ai</span>
    </div>
  );
};