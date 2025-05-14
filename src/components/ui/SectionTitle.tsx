
import React from 'react';
import { Separator } from "@/components/ui/separator";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  textColor?: string;
  separatorColor?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  textColor = "text-[#2D3E40]",
  separatorColor = "bg-[#A37C40]"
}) => {
  return (
    <div className="mb-12 text-center">
      <h2 className={`text-4xl font-oswald font-bold ${textColor} mb-4`}>{title}</h2>
      <Separator className={`mx-auto w-24 ${separatorColor} h-1 mb-8`} />
      {subtitle && (
        <p className={`text-xl max-w-3xl mx-auto font-roboto ${textColor === "text-white" ? "" : "text-[#555]"} mb-4`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
