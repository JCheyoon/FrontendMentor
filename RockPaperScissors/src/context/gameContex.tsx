import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface GameState {
  isSelected: boolean;
  playerChoice: "string" | undefined;
  computerChoice: "string" | undefined;
  result: "win" | "lose" | "draw" | null;
  score: number;
  play: (
    playerChoice: "rock" | "scissors" | "paper" | "lizard" | "spock",
  ) => void;
  playAgain: () => {};
}

const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      playerChoice: null,
      computerChoice: null,
      result: null,
      score: 0,
      isSelected: false,
      playAgain: () => {
        set({ isSelected: false });
      },
      play: (playerChoice) => {
        const choices = ["rock", "scissors", "paper", "lizard", "spock"];
        const computerChoice = choices[Math.floor(Math.random() * 5)];
        let result: "win" | "lose" | "draw";
        let score = 0;
        if (
          (playerChoice === "rock" &&
            (computerChoice === "scissors" || computerChoice === "lizard")) ||
          (playerChoice === "scissors" &&
            (computerChoice === "paper" || computerChoice === "lizard")) ||
          (playerChoice === "paper" &&
            (computerChoice === "rock" || computerChoice === "spock")) ||
          (playerChoice === "spock" &&
            (computerChoice === "scissors" || computerChoice === "rock")) ||
          (playerChoice === "lizard" &&
            (computerChoice === "spock" || computerChoice === "paper"))
        ) {
          result = "win";
          score = score + 1;
        } else if (playerChoice === computerChoice) {
          result = "draw";
        } else {
          result = "lose";
        }

        set((prev) => ({
          playerChoice,
          computerChoice,
          result,
          isSelected: !prev.isSelected,
        }));
        // Delay the score update by 1 second
        setTimeout(() => {
          set((prev) => ({ score: prev.score + score }));
        }, 1000);
      },
    }),
    {
      name: "rock-paper-scissors-spock-lizard-storage",
    },
  ),
);
export default useGameStore;
