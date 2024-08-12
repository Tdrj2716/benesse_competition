import { useCallback, useEffect, useState } from "react";

const notificationMessages = {
  start: "頑張っていきましょう！",
  passed10: "10分経過！",
  middle: "折り返しに入りました！",
  left10: "あと10分です！",
  finishing: "もう少しです！",
  finished: "終わりました！",
};

const shuzoQuote = [
  "もう少し頑張ってみろよ！",
  "真剣だからこそ、ぶつかる壁がある。",
  "ダメダメダメ！諦めたら！",
  "君が次に叩く1回で、壁は打ち破れるかもしれないんだ！",
  "今日からお前は富士山だ！",
];

export const useTimeNotificaion = (limitSec: number) => {
  const [timer, setTimer] = useState(0);
  const [message, setMessage] = useState<string>(notificationMessages.start);

  useEffect(() => {
    const intervalId = setInterval(() => setTimer(timer + 1), 1000);

    if (timer >= 10 * 60) setMessage(notificationMessages.passed10);
    else if (timer >= limitSec / 2) setMessage(notificationMessages.middle);
    else if (timer >= limitSec - 10 * 60) setMessage(notificationMessages.left10);
    else if (timer >= limitSec - 5 * 60) setMessage(notificationMessages.finishing);
    else if (timer >= limitSec) setMessage(notificationMessages.finished);

    return () => clearInterval(intervalId);
  }, [timer, message, limitSec]);

  return { timer, message };
};

export const useCheerings = () => {
  const [cheerings, setCheerings] = useState<string[]>([]);
  const triggerCheerings = useCallback(() => {
    // ここではshuzo_quoteからランダムに三つ選択
    setCheerings(() => {
      const shuffled = [...shuzoQuote];

      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      return shuffled.slice(0, 3);
    });
  }, []);

  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(timer + 1);
      console.log("cheer:", cheerings, timer);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [timer]);

  return { cheerings, triggerCheerings };
};
