const profileAvatarSeeds: string[] = [
  'Patches',
  'Molly',
  'Oscar',
  'Pepper',
  'Tigger',
  'Princess',
  'Midnight',
  'Mittens',
  'Dusty',
  'Kitty',
];

export default function FetchProfileAvatarImage(username: string): string {
  const baseUrl: string = 'https://api.dicebear.com/8.x/bottts-neutral/svg?';
  const imageSrc: string =
    baseUrl + 'seed=' + profileAvatarSeeds[username.length % 10] + '&size=275';
  return imageSrc;
}
