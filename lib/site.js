export const site = {
  name: 'Team Dunk',
  url: 'https://www.teamdunk.net',
  email: 'Simone.Harris@teamdunk.net',
  phone: '+1 (702) 447-8550',
  address: 'PO Box 12222, Wilmington, DE 19850',
};

export const nav = [
  ['Home', '/'], ['About', '/about'], ['Team Dunk Ghana', '/team-dunk-ghana'],
  ['Programs', '/programs'], ['Gallery', '/gallery'], ['Blog', '/blog'], ['Dunkiverse ↗', '/dunkiverse']
];

export const gallery = [
  ['/images/team/little-dunk-live-team.webp', 'Team Dunk team celebrating at a Little Dunk LIVE community event'],
  ['/images/ghana/team-dunk-ghana-invitational.webp', 'Coach Alico Dunk promoting the Team Dunk Ghana youth basketball invitational'],
  ['/images/ghana/ghana-youth-basketball.webp', 'Team Dunk Ghana youth basketball initiative'],
  ['/images/ghana/ghana-community-impact.webp', 'Team Dunk Ghana community impact program'],
  ['/images/ghana/ghana-basketball-program.webp', 'Youth development through basketball in Ghana'],
  ['/images/programs/volunteer-basketball-coach.webp', 'Volunteer coach helping a young basketball player'],
  ['/images/programs/youth-basketball-mentorship.webp', 'Basketball mentorship and youth development'],
  ['/images/programs/basketball-clinic.webp', 'Team Dunk basketball coaching clinic'],
  ['/images/programs/group-basketball-session.webp', 'Team Dunk group basketball session'],
  ['/images/programs/youth-workshop.webp', 'Team Dunk youth workshop and presentation'],
  ['/images/team/cofounder-alico-dunk.webp', 'Team Dunk co-founder Coach Alico Dunk'],
  ['/images/team/cofounder-simone-harris.webp', 'Team Dunk co-founder Simone Harris'],
];

export const posts = [
  {
    slug: 'team-dunk-ghana-expanding-the-mission',
    title: 'Team Dunk Ghana: Expanding the Mission Beyond Borders',
    category: 'Ghana Initiative', date: 'August 1, 2026', image: '/images/ghana/team-dunk-ghana-invitational.webp',
    excerpt: 'How basketball, mentorship and creative learning can help young people build confidence and lead in their communities.',
    body: [
      ['A global mission with local roots', 'Team Dunk Ghana brings our youth-development mission to Ghana through basketball fundamentals, mentorship and creative experiences. The initiative is designed with communities, not simply delivered to them, so every clinic can reflect the young people it serves.'],
      ['Developing champions on and off the court', 'The court is our classroom. Young athletes practise teamwork, communication, discipline and perseverance while improving their basketball skills. Those habits matter at school, at home and wherever leadership is needed.'],
      ['What comes next', 'Clinics, wellness workshops and Little Dunk LIVE experiences will create more ways for young people and families to learn together. We welcome schools, coaches, community leaders and sponsors who want to help build a sustainable program in Ghana.']
    ]
  },
  {
    slug: 'why-basketball-is-more-than-a-game',
    title: 'Why Basketball Is More Than Just a Game', category: 'Programs & Impact', date: 'July 18, 2026', image: '/images/programs/youth-basketball-mentorship.webp',
    excerpt: 'The lessons learned in practice can shape confidence, relationships and choices far beyond the final whistle.',
    body: [
      ['A place to belong', 'A strong basketball program gives young people a team, trusted adults and a clear goal. Showing up consistently teaches responsibility while shared challenges create real connection.'],
      ['Skills for life', 'Players learn to communicate under pressure, accept feedback and recover from mistakes. Team Dunk coaches connect each drill to values such as patience, courage and accountability.'],
      ['Everyone has a role', 'Success is not limited to the top scorer. Great teams need listeners, encouragers, problem-solvers and leaders. Helping each child discover their role is one of the most valuable outcomes of youth sport.']
    ]
  },
  {
    slug: 'programs-that-make-an-impact',
    title: 'Programs That Make an Impact: How Team Dunk Is Changing Lives', category: 'Programs & Impact', date: 'July 6, 2026', image: '/images/programs/volunteer-basketball-coach.webp',
    excerpt: 'A closer look at the sports, storytelling, mentoring and wellness experiences behind the Team Dunk mission.',
    body: [
      ['Meeting young people where they are', 'Learning becomes memorable when it is active, relevant and fun. Team Dunk combines basketball, music, storytelling and interactive workshops to engage different strengths and learning styles.'],
      ['Confidence through practice', 'Clinics create achievable challenges and visible progress. Mentorship adds the encouragement young people need to keep going, ask for help and see new possibilities for themselves.'],
      ['A whole-community effort', 'Families, educators, volunteers and partners make lasting impact possible. Each collaboration helps us offer structured, positive activities to more young people.']
    ]
  },
  {
    slug: 'meet-little-dunk-learning-through-adventure',
    title: 'Meet Little Dunk: Learning Through Adventure', category: 'Team Dunk', date: 'June 22, 2026', image: '/images/team/little-dunk-comic.webp',
    excerpt: 'Meet the young hero who turns everyday challenges into stories about courage, kindness and growth.',
    body: [
      ['A hero young learners can know', 'Little Dunk is curious, determined and still learning. His stories show children that heroes can make mistakes, ask questions and grow with help from their team.'],
      ['Stories with purpose', 'Through music and creative storytelling, Little Dunk explores bullying, hope, emotional awareness and the power of speaking up. Each adventure opens a conversation for children, families and educators.'],
      ['From stage to screen', 'Little Dunk LIVE and future animated stories extend Team Dunk beyond the basketball court while preserving the same mission: educate, elevate and empower.']
    ]
  },
  {
    slug: 'dunkiverse-basketball-meets-roblox',
    title: 'Introducing the Dunkiverse: Where Basketball Meets Roblox', category: 'Dunkiverse', date: 'June 8, 2026', image: '/images/dunkiverse/dunkiverse-roblox-heroes.webp',
    excerpt: 'A separate digital universe where quests, basketball and positive life lessons come together.',
    body: [
      ['Step through the portal', 'The Dunkiverse is a distinct Team Dunk creative experience on Roblox. Players explore imaginative worlds, meet new characters and take on basketball-inspired quests.'],
      ['Play with a purpose', 'Challenges encourage teamwork, confidence, kindness and problem-solving. The experience is designed to make positive learning feel like a natural part of play.'],
      ['A growing universe', 'Little Dunk, Hero Dunk, Hoopnaari and friends will guide players through new worlds, abilities and cultural stories as the Dunkiverse continues to expand.']
    ]
  }
];

export function metadata(title, description, path = '') {
  return { title, description, alternates: { canonical: path || '/' }, openGraph: { title, description, url: path || '/', siteName: site.name, type: 'website', images: ['/images/team/little-dunk-live-team.webp'] }, twitter: { card: 'summary_large_image', title, description } };
}
