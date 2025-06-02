import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface StarsProps {
  rating: number;
}

export default function RatingStar({ rating }: StarsProps) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const totalStars = 5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<AiFillStar key={"full" + i} className="text-yellow-400" />);
  }

  if (hasHalfStar) {
    stars.push(
      <AiFillStar
        key={"half"}
        className="text-yellow-400 opacity-50"
        style={{ clipPath: "inset(0 50% 0 0)" }}
      />
    );
  }

  const remaining = totalStars - stars.length;
  for (let i = 0; i < remaining; i++) {
    stars.push(<AiOutlineStar key={"empty" + i} className="text-yellow-400" />);
  }

  return <div className="flex items-center gap-1">{stars}</div>;
}
