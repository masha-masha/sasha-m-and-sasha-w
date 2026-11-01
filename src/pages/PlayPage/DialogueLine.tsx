import React from "react";

export interface PartOfADialogue {
 character?: string;
 type?: string;
 remark?: string;
 text?: string;
}

interface DialogueLineProps {
 replica: PartOfADialogue;
 index: number;
}

export const DialogueLine: React.FC<DialogueLineProps> = ({
 replica,
 index,
}) => {
 if (!replica.text) return null;

 switch (replica.type) {
  case "poetry":
   return (
    <p key={`line-${index}`} className="dialogue">
     {replica.character && (
      <span className="dialogue--name">{replica.character}</span>
     )}
     {replica.remark && (
      <span className="dialogue-remark"> {replica.remark}</span>
     )}
     : <span className="dialogue--poetry">{replica.text}</span>
    </p>
    // <blockquote key={`poetry-${index}`} className="dialogue--poetry">
    //  {replica.text}
    // </blockquote>
   );

  case "remark":
  case "action":
   return (
    <p key={`remark-${index}`} className="dialogue--main-remark">
     {replica.text}
    </p>
   );

  case "line":
  default:
   return (
    <p key={`line-${index}`} className="dialogue">
     {replica.character && (
      <span className="dialogue--name">{replica.character}</span>
     )}
     {replica.remark && (
      <span className="dialogue-remark"> {replica.remark}</span>
     )}
     : {replica.text}
    </p>
   );
 }
};
