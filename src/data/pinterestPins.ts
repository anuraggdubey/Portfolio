/**
 * ─────────────────────────────────────────────────────────────────
 *  PIN DATA — Anurag's Pinterest Pins
 *
 *  For each pin, provide:
 *    • id          – unique number
 *    • title       – short caption for the card
 *    • image       – direct image URL (right-click a pin image → Copy image address)
 *    • pinUrl      – full Pinterest pin URL (e.g. https://in.pinterest.com/pin/123456)
 *    • board       – board name this pin belongs to (shown as a subtle label)
 * ─────────────────────────────────────────────────────────────────
 */
export type PinData = {
  id: number;
  title: string;
  image: string;
  pinUrl: string;
  board: string;
};

export const pinterestPins: PinData[] = [
  {
    id: 1,
    title: 'Beach Sunset',
    image: 'https://i.pinimg.com/736x/86/31/85/8631855d7cfcbcbde0312afd50f5a181.jpg',
    pinUrl: 'https://in.pinterest.com/pin/1090645234801138411/',
    board: 'Photography',
  },
  {
    id: 2,
    title: 'Wankhede Stadium',
    image: 'https://i.pinimg.com/736x/c0/c7/fb/c0c7fbe22054b827ea39d80ab1e487e8.jpg',
    pinUrl: 'https://in.pinterest.com/pin/1090645234801072275/',
    board: 'Sports',
  },
  {
    id: 3,
    title: 'House Aesthetic',
    image: 'https://i.pinimg.com/736x/bb/fa/3d/bbfa3da5ce7a60ab1028fba392f7d3c2.jpg',
    pinUrl: 'https://in.pinterest.com/pin/1090645234824774003/',
    board: 'Aesthetic',
  },
  {
    id: 4,
    title: 'Sunshine',
    image: 'https://i.pinimg.com/736x/d2/a2/d0/d2a2d0c7902221610935f2e07c30d33f.jpg',
    pinUrl: 'https://in.pinterest.com/pin/1090645234813287352/',
    board: 'Photography',
  },
  {
    id: 5,
    title: 'Marine Lines',
    image: 'https://i.pinimg.com/736x/2e/a1/3c/2ea13c10bad7cc8b2d4bd4c5e3208b2d.jpg',
    pinUrl: 'https://in.pinterest.com/pin/1090645234811059019/',
    board: 'Photography',
  },
  {
    id: 6,
    title: 'Food Foodie',
    image: 'https://i.pinimg.com/736x/9d/b6/2c/9db62c05a41127bd387d831a8127dbe8.jpg',
    pinUrl: 'https://in.pinterest.com/pin/1090645234811861092/',
    board: 'Food',
  },
  {
    id: 7,
    title: 'RCB',
    image: 'https://i.pinimg.com/736x/2f/5f/39/2f5f39359920ba2ff755e2cf3fec18ff.jpg',
    pinUrl: 'https://in.pinterest.com/pin/1090645234824773329/',
    board: 'Sports',
  },
  {
    id: 8,
    title: 'Guitar',
    image: 'https://i.pinimg.com/736x/6c/52/28/6c5228b598352ff7e9af45a400ed5f78.jpg',
    pinUrl: 'https://in.pinterest.com/pin/1090645234824773794/',
    board: 'Aesthetic',
  },
  {
    id: 9,
    title: 'Candies Cafe',
    image: 'https://i.pinimg.com/736x/42/42/79/424279b07cc9e2180a4f527db92baae0.jpg',
    pinUrl: 'https://in.pinterest.com/pin/1090645234811945883/',
    board: 'Food',
  },
  {
    id: 10,
    title: 'Capital Mall',
    image: 'https://i.pinimg.com/736x/07/8c/00/078c00e200fa2956ce41cc77180d8622.jpg',
    pinUrl: 'https://in.pinterest.com/pin/1090645234801072218/',
    board: 'Photography',
  }
];

// ── YOUR PINTEREST PROFILE URL (for "View all" button) ────────
export const PINTEREST_PROFILE_URL = 'https://in.pinterest.com/anuraggdubey';
