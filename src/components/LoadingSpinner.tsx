import React from 'react';
import { Loader2 } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center p-4">
      <Loader2 className="animate-spin text-blue-600" size={24} />
    </div>
  );
}