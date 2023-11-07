import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface GameState {
  isSelected: boolean;
  playerChoice: "rock" | "scissors" | "paper" | "lizard" | "spock" | null;
  computerChoice: "rock" | "scissors" | "paper" | "lizard" | "spock" | null;
  result: "win" | "lose" | "draw" | null;
  play: (
    playerChoice: "rock" | "scissors" | "paper" | "lizard" | "spock",
  ) => void;
  playAgain: () => {};
}

const useGameStore = create<GameState>()(
  devtools(
    persist(
      (set) => ({
        playerChoice: null,
        computerChoice: null,
        result: null,
        isSelected: false,
        playAgain: () => {
          set({ isSelected: false });
        },
        play: (playerChoice) => {
          console.log("test play");
          const choices = ["rock", "scissors", "paper", "lizard", "spock"];
          const computerChoice = choices[Math.floor(Math.random() * 5)];
          let result: "win" | "lose" | "draw";
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
        },
      }),
      {
        name: "rock-paper-scissors-spock-lizard-storage",
      },
    ),
  ),
);
export default useGameStore;
