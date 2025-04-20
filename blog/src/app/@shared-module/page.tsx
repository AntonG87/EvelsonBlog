import { SharedModuleWindow } from '@/components/shared-module-window';
import {Trash2} from "lucide-react";

export default function ExampleRow() {
  return (
    <SharedModuleWindow>
      {/* любой триггер: в виде иконки‑корзины для строчки таблицы */}
      <button className="text-red-600 hover:text-red-700">
        <Trash2 className="h-5 w-5" />
      </button>
    </SharedModuleWindow>
  );
}
