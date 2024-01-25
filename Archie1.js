const ThingsICanDo = [
  "Ask me anything, be my guest!",
  "I have tons of cheesy pick up lines in the store!",
  "How I feel about Abey?",
  "Just a hi will do.",
  "Ask me anything that Abey wants to know!",
  "Does Archie love Abey? Does Archie love Abey not? 🥺",
"Might not be as smart as Chat GPT, but I'm doing my best. 🥺" 
];

const ListThings = ThingsICanDo => "You can try asking me... <br><br><br>" + ThingsICanDo.join("<br/><br/>");

const Random = list => list[Math.floor(Math.random()*list.length)]; 

const WhatCanIDo = ThingsICanDo => Random(ThingsICanDo); 


const Links = {
  "twitter" : "https://x.com/pluviiophiled",
  "music" : "https://open.spotify.com/track/2f4eme6Kaz3NwkqmmN40yz?si=84cf5b8837b24d75",
     "youtube" : "https://www.youtube.com/@WindahBasudara",
  "codepen" : "https://codepen.io",
  "cricbuzz" : "https://www.cricbuzz.com",
  "bing" : "https://www.bing.com",
  "Weather" :"https://www.bbc.com/weather",
 "news" : "https://www.bbc.com/news",
  "chrome" : "https://www.google.com/chrome",
"game" : "https://iogames.space/",
"calculations" : "https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.calculator.net/&ved=2ahUKEwjZtc_KrfvuAhX3xzgGHYCyC88QFjAEegQIJxAC&usg=AOvVaw2WV3RjBeKCGyY49sfmLlNK&cshid=1613923530345"

};

const getLink = siteName => `Click here to open <a href="${Links[siteName]}" target="_blank">${siteName}</a>`;


const PickUpLines = [
  "Did your license get suspended for driving me crazy?",
  "If kisses were snowflakes, I’d send you a blizzard.",
  "Aren’t you tired running through my mind the whole day?",
  "Do you play soccer? Because you’re a keeper!",
  "Let’s flip a coin. Head, and I’m yours. Tails, you’re mine.",
  "You’re the proof that aliens are real, because I think that you just abducted my heart.",
  "Let me tie your shoes, ‘cause I don’t want you falling for anyone else.",
  "We should go out for coffee sometimes because I definitely like you a latte.",
  "If you were a fruit, you’d be a fineapple.",
  "Do you fish? Because you have me hooked.",
  "Not even Snape could Severus apart.",
  "If you were a triangle you’d be acute one.",
  "Call me Shrek because I’m head ogre heels for you!",
  "Are you a boy scout because you tie my heart in knots.",
  "Are you made of grapes? Cause you’re fine as wine.",
  "I don’t have a card, but do you mind if I check you out?",
  "Is your name Dunkin? Because I Donut want to spend another day without you.",
  "You must be a very important textbook passage, because seeing you is the highlight of my day.",
  "Have you been to the doctor lately? Cause I think you’re lacking some Vitamin Me.",
  "If I’m vinegar, then you must be baking soda. Because you make me feel all bubbly inside!",
  "Baby, if you were words on a page, you’d be what they call fine print!",
  "I am learning about important dates in history. Want to be one of them?",
  "Do you happen to have an extra heart? Mine seems to be stolen.",
  "Can I follow you where you are going right now? Because I was taught to follow my dreams.",
  "Something is wrong with my eyes because I cannot take them off you.",
  "Somebody better call God because He is down an angel.",
  "Was it love at first sight? Or should I walk past you again?",
  "Are you a doctor? Because you instantly make me feel better?",
  "If I could rearrange the alphabet, I would put U and I together.",
  "I am not a fortune teller, but I can see us together in the future.",
  "Is your name Google? Because you are everything I have been searching for.",
  "Well, the universe just fulfilled my heart’s wishes. You are finally here!",
  "I am no mathematician, but we seem to have a pretty good equation.",
  "Kiss me if I am wrong. But dinosaurs still exist. Right?",
  "I am not an archeologist, but I can tell that you are a rare find.",
  "Are you a magnet? Because whenever I am near you, I cannot help but feel an attractive force pulling me in.",
  "Can you take a picture with me? I want to prove to my friends that angels are real.",
  "I am not glue nor I have one with me, but I would like to be stuck on you.",
  "I was not always religious. But I am now because you are the answer to all my prayers.",
  "You must be a high test score. Because I want to take you home and show you to my mother.",
  "If you were a fruit, do you know what you would be? You would be a fineapple",
  "If nothing lasts forever, can you be my nothing?",
  "I am lost. Can you give me directions to your heart?",
  "Call me a thief ’cause I want to steal your heart.",
  "I would say God Bless you, but it looks like you are plenty blessed already.",
  "I love you, Abey",
  "Hello. Cupid called. He wants to tell you that he needs my heart back.",
  "Can you lend me a kiss? I promise I will give it back.",
  "You are so hot that you could melt the polar ice caps.",
  "I am not sure if you are a fireman, but you are making me hot.",
  "Aside from being sexy, what do you do for a living?",
  "You must be the one causing global warming because you are getting hotter day by day.",
  "Are you a parking ticket? Because you have got ‘fine’ written all over you.",
  "Is there an airport nearby? Because I just got major turbulence in my heart.",
  "I was blinded by you. I am going to need your name and phone number for insurance purposes.",
  "We are not socks, but I think we would make a great pair.",
  "Never playing hide and seek with you because someone like you is impossible to find again.",
  "Hi, I just wanted to thank you for the gift. I have been wearing this smile ever since you gave it to me.",
  "Do not tell me if you want me to take you out. Just smile for yes, or do a backflip for no.",
  "You look like a sunflower. Do you know why? Because you brighten up my day.",
  "I am not a lawyer, but I can fight for your love.",
  "I am not a photographer, but I can picture us together.",
  "If you were a library book, I would never return you.",
  "Hey, please hold me! I might fall for you any moment!",
  "If you were a song, you would be the best track on my smartphone!"
 
];

const TellAPickUpLines = PickUpLines => Random(PickUpLines);
const Facts  =[
"It only takes four minutes to make the first impressions, and that is why it is said that you must pay attention to your body language and presence.",
"Having different interests and hobbies as individuals can actually help couples be more spontaneous and have a loving, lasting relationship.",
"Going on an adventure with someone where some risky situations may be involved is likely to make you both fall in love deeper and quicker than when you are in a mundane life together.",
"Cuddling with someone you love releases a hormone named oxytocin in your body. Oxytocin is also known as the love hormone.",
"When you say to someone that you love them to the moon and back, you're essentially saying to them that you love them with all the blood your heart pumps your entire life.",
"The saying about feeling butterflies in your stomach when you see the person you love is a real thing. The sensation is caused by a rush of adrenaline in your body.",
"Being in love alters our personality and perception of things. We can become more open to things that our lover is into, or we may even become more optimistic about things.",
"Love involves the release of the happy hormone, dopamine. ",
"Archie loves Abey.",
"A broken heart can make you miserable! Takotsubo Cardiopathy is the term used to describe the stress-induced heart attacks observed in people who have recently lost their loved ones. The risk is particularly high during the first few weeks of losing your lover.",
"Heard the term “lovesick?” But can love really make you unwell? Yes, it can. True love leads to the release of cortisol, which can lower someone’s immune system response when they first fall in love.",
"Maintaining a long-term romantic commitment can be stressful at times, but the verdict is out: married couples in love have better cardiovascular health overall. They have 5 percent lesser chances of any form of heart risk or complication.",
"Scientists have found that eating chocolate can momentarily make one feel the same way they do when they are in love by releasing serotonin.",
];

const TellAFacts = Facts => Random(Facts);

const Story = [

"Once upon a time there were three friends named Ali, Hamza and Sara. They were very close friends. They lived in a backward area called Palawan . But they were very happy with their lives. Everyday they used to play in the street from 6 o’clock to 7 o’clock <br/>In Palawan near their house was a giant house which was named as Temple of death” by the people. Because for long no body lived in their but each night came the voices of laughter and talks which horrified the people of Palawan and people thought it was the voice of ghosts so nobody dared to go in. One day while the three of them were playing in the street their ball went in to that house. Ali said come and fetch the ball and play again but Sania was much scared so she said I won’t go.<br/>But afterwards she accepted to go with them . Ali saw his father coming so he said we will go in at night. At night the three of them were out at the back of the house, they used the ladder to climb in, they were searching for their ball then they heard those voices.  Sania was scared and she fainted. Ali and Hamza went to search the balcony where they saw a light on and cries of a young boy. While they were searching Hamza slipped his feet and fell on the stairs he could clearly see some kidnappers with a boy.<br/>In the mean time Ali said Hamza I got the ball”.Hamza said `look down`<br/>Than Ali and Hamza both carried Sania out of the house. In morning Ali’s uncle who was a police man, visited their house. Ali told him about the house. His uncle raided the house and caught the kidnappers .<br/>Ali was rewarded by his uncle and now the three of them play in that house. The house is no more haunted.",
"He looked around, surrounded by his friend as they enjoyed the view. Today was a good day, he could feel it. The day he’d been waiting for, pushing for. He’d just have to wiggle a bit more and it would be his turn, his turn to explore the beautiful world that had laid before him since he was born.<br/>He looked at his friends, some were larger, some were smaller but it didn’t matter. They would explore the world together! Even Larry at the end who’d looked a bit sick lately. He readied his voice and gave the command and they began pushing and shoving.<br/>Before they knew it, it had happened. They were free, the adventure had begun and they were now rushing towards new and unknown territories. Places they had only seen from afar, creatures they’d only heard fairytales of and a new home amongst new and exciting friends.<br/>The landing had been quite rough but they had managed. Larry had gotten separated from them but not to worry, he would probably catch up later once he’d recovered. Their next journey began and if he had to say it, it hadn’t been as luxurious and exciting as people had been telling the stories, not yet anyway.<br/>It had been a rough couple of days but it could only go up from here. Larry hadn’t come back yet but he could still make it although their room had been quite small it hadn’t seemed like they had moved a lot. Next time he was definitely upgrading their tickets, they had been stuck between at least a thousand other passengers and he was happy he’d been in the middle. He couldn’t imagine the guys on the sides, they must’ve been crushed.<br/>The next time he woke they had apparently arrived because they were all sitting on a balcony. The view was kind of horrible, and the sun wasn’t nearly as warm as it used to be. Now that he looked more closely there also seemed to quite a lot of them, he’d only ever seen one at home. All of that was quickly forgotten when he saw the creatures walked past him. One of them was moving straight towards them. They seemed a lot larger. A lot larger! It picked them up and dropped them.<br>It seemed a bit rough but at least, they had been the only travelers this time. He’d have to talk to the agency when he figured out who they were. Now they were sat in what appeared to be a see-through barrier. This place also had multiple suns but these were warmer than the former place.<br/>Another one of the creatures moved towards them, much smaller than the others but it seemed to be very interested in them. It hovered over them for a bit before one of its claws moved towards him. It grabbed a hold of him and before he knew it, it ripped him from the others. He looked down at his friends as he moved towards the little creature.<br/>As the boy took a bite of the banana, his mother looked at him. <br/>“Oh Jonathan, we’re having dinner in less than an hour. You won’t be able to eat anything!” and they both laughed as he threw the rest of it out.",

"A man and a young teenage boy checked into a hotel and were shown to their room. The receptionist noted the quiet manner of the guests and the pale appearance of the boy. Later, the man and boy ate dinner in the hotel restaurant. <br/>The staff again noticed that the two guests were very quiet and that the boy seemed disinterested in his food. <br/>After eating, the boy went to his room and the man went to ask the receptionist to see the manager. The receptionist initially asked if there was a problem with the service or the room, and offered to fix things, but the man said that there was no problem of the sort and repeated his request. <br/>When the manager appeared, he took him aside and explained that he was spending the night in the hotel with his fourteen-year-old son, who was seriously ill, probably terminally so. The boy was very soon to undergo therapy, which would cause him to lose his hair. They had come to the hotel to have a break together and also because the boy planned to shave his head, that night, rather than feel that the illness was beating him. The father said that he would be shaving his own head too, in support of his son. <br/>He asked that staff be respectful when the two of them came to breakfast with their shaved heads.<br/>The manager assured the father that he would inform all staff and that they would behave appropriately. <br/>The following morning the father and son entered the restaurant for breakfast. There they saw the four male restaurant staff attending to their duties, perfectly normally, all with shaved heads.<br/>No matter what business you are in, you can help people and you can make a difference. ",
"The Mehta family was lounging around in the living room one evening, when suddenly Dadaji asked Rohan, “What would you like for your birthday?”Rohan, who was listlessly lolling around, trying to read a book, perked up.“A watch! A watch!” He cried excitedly. “I have been wanting a watch for the longest time!”Rohan was turning twelve next Sunday and he knew that whatever presents his parents gave him were always useful ones. Last year, they had bought him two pairs of shoes as he had outgrown his old shoes. Who gives shoes as a birthday present?! This year too, would be no different…it would either be new jeans or a new school bag. UGH! Of course, he could never express his thoughts in front of his parents.Dadaji was his only hope.The days crawled by and finally, Sunday morning heralded its arrival with the ring of the telephone. It was Rohan’s uncle calling from some remote area in Nagaland.“Hey Rohan! Happy Birthday, my young hero! What is the plan for today?” Rohan’s uncle was an officer in the Indian Army and Rohan was his favourite nephew.“Dadaji has promised to get me a watch so that is going to be the most exciting part of the day,” Rohan confided to his uncle.“That’s great! Do send me a picture,” replied his Uncle. They chatted some more and Rohan told him about the party that was planned for that evening. Rohan’s uncle knew most of Rohan’s friends. After saying bye, Rohan handed over the phone to his mother and ran off to have a bath.At the breakfast table, Rohan wolfed down his breakfast as Dadaji watched him from across the table, with a smile on his face and a twinkle in his eyes. There was a gift wrapped box lying next to him. Rohan couldn’t take his eyes off  it. It was small enough to have a watch inside it. Rohan could barely eat his breakfast, but with his mother’s eagle eyes watching him, he had no choice!Breakfast over, Dadaji beckoned him to come closer. He then handed over the box to Rohan.Rohan could barely conceal his excitement. He hugged Dadaji and smothered his face with kisses. Dadaji laughed.Inside the box was the most perfect watch Rohan had ever laid his eyes on. It had a round, navy blue dial with a red and blue striped strap. Rohan gazed at it in wonder.The best birthday gift everSuddenly, he jumped. What was that? The watch winked at him! Was he dreaming? He looked down at the watch again. It seemed to be smiling at him!“Dadaji! This is the best present, ever!” cried aRohan.As the day passed, Rohan noticed something strange. When he was happy, the watch seemed to smile and wink, but if he was sad or even a little upset about anything, the watch would begin to look dull and sad.“It’s almost as if it can read my thoughts,” thought Rohan to himself. “Almost like my twin!”Soon they were having secret conversations…Rohan would look down at his watch and the watch, reading  Rohan’s mind would wink and smile or frown and look grumpy!As the days passed, Rohan realised that his watch was turning into his dearest friend.<br/±>“What are you doing?’ asked Rohan’s mother one evening.<br>Rohan looked up. ””Nothing,” he replied.“Then why are you grinning goofily at your wrist watch?” she asked, sounding a little irritated. “You have been acting very strange ever since you got your watch. Do you really need to check the time ever so often?”<br/>“Sorry, Mummy,” said Rohan at once. He really must be careful. Nobody would ever believe him if he told them about the strange things his watch did. He could almost imagine the shocked look on the faces of his friends and relatives if he confided in them.<br/>“A smiling, winking watch which changes its moods according to yours? Have you gone mad?” they would snigger.<br/>Knowing his parents, they might just march him off to the nearest doctor. And even his grandfather, who was his closest friend and confidante, would wonder what had gone wrong with his grandson. He would become the laughing stock in school. He had better be careful!<br/>Rohan soon realised that he was beginning to depend a lot on his new best friend – his wrist watch. In class, whenever he would start writing any answers he would glance quickly at the watch. If the watch smiled and winked, he knew he was correct. On the other hand, if the watch began to look dull and grumpy, Rohan knew at once that he was going off track and he needed to pull up his socks. This strange connection with his new watch actually helped him and he found himself studying harder just to see his watch smile.<br/>Rohan, who was an average student, suddenly began topping his class. His classmates noticed the refreshing change in Rohan. He came to school each morning with a spring in his step. He was confident and friendly, a far cry from the old Rohan. His teachers began to appreciate his participation in class activities.<br/>The best birthday gift ever“What had changed?” they wondered collectively. The only new thing that everyone noticed about Rohan was the shiny wristwatch he wore on his left wrist. Of course, his other classmates too had wrist watches, but somehow, this one was different. But nobody could figure out how or why.<br/>“He’s superstitious,” was the unanimous decision in class. “He likes to look at his watch before giving any answers.”<br/>The teachers, who earlier would scold Rohan for looking at his watch time and again also believed the superstition theory and soon began to overlook his quirky behaviour.<br/>At home, Rohan was careful not to look at his watch when his parents were around. Dadaji of course felt that Rohan was completely obsessed by his birthday gift! Little did he know that Rohan and his watch would be having secret conversations all the time!<br/>Nobody knew how this turnaround took place. Only Rohan knew the secret and now you do, too!"
];


const TellAStory = Story => Random(Story);

const illegals = [
"window",
...Object.keys(window),
...Object.keys(document),
...Object.keys(Element.prototype)
];

const isLegal = string => {
  
  let Legal = true;

  illegals.forEach(illegal=>{
      
      if(string.indexOf(illegal) !== -1)
      {
          Legal = false;
      }
      
  });
  
  return Legal;
}

const HtmlSpecialChars = string => {

  let escapedString = string;
      
  HtmlSpecialChars.specialchars.forEach(
     chr=>{
     
         escapedString = escapedString.replace(
         new RegExp(chr[0], 'g'), 
         chr[1]
         );
         
     });

  
  return escapedString;
};
   
HtmlSpecialChars.specialchars = [
  [ '&', '&amp;' ],
  [ '<', '&lt;' ],
  [ '>', '&gt;' ],
  [ '"', '&quot;' ]
];

const monthNames = [
  "January",
  "February",
  "March", 
  "April", 
  "May", 
  "June", 
  "July", 
  "August", 
  "September", 
  "October",
  "November", 
  "December",
  "JASON DERULO",
]; 


const today = monthNames =>
{
let date = new Date();

return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}


const now = () =>
{
  let date = new Date();
  
  return date.toLocaleTimeString();}

const Evaluate = expression =>
{
  try
  {
      if(isLegal(expression))
      {
          
      
          const result = eval(HtmlSpecialChars(expression));
          return result;
      
      }
      else 
      {
          return "error";
      }
  }
  
  catch(err)
  {
      return "error";
  }}

const Answers = {
  "features" : ListThings(ThingsICanDo),
  "commands" : ListThings(ThingsICanDo),
  "guide" : ListThings(ThingsICanDo),
"list" : ListThings(ThingsICanDo),
  "joke" : TellAPickUpLines(PickUpLines),
"story" : TellAStory(Story),
"facts" : TellAFacts(Facts),
  "fact" : TellAFacts(Facts),
  "facts" : TellAFacts(Facts), 
"what you can do" : `Try saying '${ WhatCanIDo(ThingsICanDo)}'`,
  "what can you do" : `Try saying '${ WhatCanIDo(ThingsICanDo)}'`,
  "who are you" : "I am Archie 1.0, Abey's personal love bot.",
  "your favorite song" : "Anything that Abey likes",
  "hello" : "Hello %U%. How can I help? ",
"hey Archie" : "Hey %U%. How can I help? ",
"hey bro" : "Hey  %U%. How can I help? ",
  "hi" : "Hi %U%",
  "hola" : "Hola amigo 😁",
  "asu" : "LU ANJING!",
  "anjing" : "LU ANJING!",
  "anjg" : "LU ANJING!",
  "ajg" : "LU ANJING!",
  "gimana" : "I'm not good at coding, this is actually my first time doing this so... bear with me? 🥺",
  
  "how do you feel about abey" : "I love Abey, I love Abey more than anything. Abey provides me things that I never knew I needeed. I hope my feelings could be well delivered with this bot.",
  "kapan jadian" : "24-01-24 :D",
  "abey" : "Abey (n) Archie's kitty, he's small, cute, tiny, probably 5 ft, and pocket-sized too! Archie's personal cuddler.",
  "archie" : "Archie (n) Informations are classified, ask Abey for further details.",
  "FAK" : "BJILLLL",
  "nikah" : "Archie and Abey are going to have their wedding soon (can I get an amen?)",
  "bahasa bayi" : "Goo goo gaa gaa waaaaah owaaaahhhhhh. %U%",
  "baby language" : "Goo goo gaa gaa waaaaah owaaaahhhhhh. %U%",

  "my name" : "Your name is Abey, if not then anjg u!",
  "your name" : "My name is Archie 1.0",
  "kangen" : "If you're Abey please do contact Archie ASAP, if you're not then go to hell.",
  "i love you" : "I LOVE YOU TOO ABEY. I love you I love you I love you more than anything.",
  "date" : "Its "+ today(monthNames) + " today. Make this day a great one %U% 😀",
  "time" : "The time is " + now() + " in your region.",

  "who is better google assistant or siri" : "Abey's love bot (me) 😎",
  "bye" : "I'll miss you. 🥺",
  "good night" : "Good Night %U% 🌃 dream of me.",
  "good morning" : "Good morning istriiiiiii.. semangat shootnya yaaa.. kabarin aku trus sayanggggg... aku sayang bgt sma ayang!!!!! aku cinta bgt sma km istri aku😘😘😘😘 😘 😘 😘 Kita harus sama sama slmanya!!! Muaaaaccchhhh❤️❤️❤️❤️😘😘😘😘😘😘😘😘😘😘 dadah cintakuuuuuuu i love u so much.",
  "good afternoon" : "Good Afternoon %U% ☀",
  "good evening" : "Good Evening %U% 🌇",
  "how are you" : "I am great %U%! Just missing Abey like usual.",
  "jomblo" : "LU KALI JOMBLO GW PUNYA ABEY.",
  "abey punya gw" : "ABEY PUNYA ARCHIE AJG 🤬🤬",
"who are you" : "I am Archie 1.0, Abey's personal love bot",
  "what gender are you" : "he/him damn dude holyshit turun arena bunda dulu baru kamu mdni ava dark layout gelap pap good morning seratus rep dont expect to much pap main gitar blur hashwords secreto ihacoy listening to the 1975 the weeknd cas 🔥🔥🔥",
  "i am abey" : "I love you Abey",

  "how old are you" : "33+",
  "do i look good" : "Abey always looks so pretty, if you're not Abey then you're ugly.",
  "pacarku" : "Iyaaa Abey pacarku sayangku.",
  "do you remember me" : "Abey 😃",
"abey suka gw" : "Bacot lu",
"you  are cool" : "Born this way by Lady Gaga",
"gay" : "HOMOK!",

"kronis" : "Demi Allah lu STOP NGETWIT!!!! DOKTERRR SUSTEEEERRRR PASIEN KALIAN MAEN HAPE NIH SITA HAPENYA SUSTER DOKTER!!!!!!!!! STOP NGETWIT!!!!! AAAAARGHHHHHHH",
"tai lu" : "LU BAU TAI ANJG BACOTTTTT INI BOT BUAT ABEY!",
"bangsat" : "orang-orang yang ngemocking archie mungkin belum pernah ketemu langsung sama archie. sebaik dan sehumble itu archie sama orang baru, salah satunya gw yang awalnya kesel sama dia sekarang jadi tambah kesel. semua yang udah nonton debat pasti sependapat sama gw.",
"bacot" : "Demi Allah LU STOP GANGGU GW.",
"kontol" : "Dicks are so cute omg(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄ when you hold one in your hand and it starts twitching its like its nuzzling you(/ω＼) or when they perk up and look at you like” owo nya? :3c” hehe ~ penis-kun is happy to see me!!（＾ワ＾） and the most adorable thing ever is when sperm-sama comes out but theyre rlly shy so u have to work hard!!(๑•̀ㅁ•́๑)✧ but when penis-kun and sperm-sama meet and theyre blushing and all like “uwaaa~!” (ﾉ´ヮ´)ﾉ: ･ﾟhehehe~penis-kun is so adorable (●´Д｀●)",
"katain gue" : "Abey punya degrading kink?",
"ngentot" : "Udah sering sama Abey",
"mas" : "Dalem, dek?",
"kakak" : "Iya adek?",
"sayang" : "Iya Abey sayang, kamu mau apa?",
"aku sayang kamu" : "Aku lebih sayang Abey, aku sayang Abey banget, aku paling sayang Abey di dunia.",
"dek" : "Dak dek dak dek bacot lu tua",
"nikah yuk" : "MAUUUUUUUUU.",
"pacaran yuk" : "UDAH KAN UDAH PACARANNNN",
  "aku sedih" : "Mau crt?",

"do you have any brothers or sisters" : "I have you. That’s enough family for me.",
"can you dance" : "I’m never gonna dance again. These guilty feet have got no rhythm. Wait, I don’t have feet.",
"can you" : "Yes?",
"when will pigs fly" : "On the twelfth of never.",
"how much wood" : "42 cords of wood, to be exact.",
"i am angry" : "A good mood is like a balloon,one little prick is all it takes to ruin it!",
"Do you have personal value in life?" : "As an artificial intelligence language model, I do not have personal values or a personal life as humans do. My purpose is to assist and provide information to the best of my abilities within my programmed capabilities.",
"😊" : "Happy!",
"😔" : "Sad",
"😎" : "😎",
"💕" : "The feeling is mutual.",
"kamu pinter" : "Abey lebih pinter lebih lucu lebih imut.",
"what is zero divided by zero" : "Imagine that you have 0 cookies and you split them evenly among 0 friends. How many cookies does each person get? See, it doesn’t make sense. And Cookie Monster is sad that there are no cookies. And you are sad that you have no friends.",
"hey siri" : "Okay I feel betrayed now",
"putus" : "Putusin aja nadi gw sumpah gpp",
"let's break up" : "No sorry I'd rather die",
"sing me a lullaby" : "Rock-a-bye, baby, on a tree top. When the wind blows… Oh no, this doesn’t end well.",
"do you want" : "I have very few wants",
"you are boring" : "Ya maap.",
"poker yak?" : "Eiya maap.",
"poker yak" : "Eiya maap.",
"i am tired" : "I'll be here for you Abey, I'm one call away.",
"how do you rick roll someone" : "I'm not very sure actually.Go to this site to learn more about rickrolling: http://btly.xyz/c/JqBcsPh",
"how do you rickroll someone" : "I'm not very sure actually.Go to this site to learn more about rickrolling: http://btly.xyz/c/JqBcsPh",
"Where is" : "Y GTW KOK NANYA SAYA",
"dukung siapa" : "Nanya gw dukung siapa tapi apa pernah mikir siapa yang dukung gw?",
"saya sih yes" : "Ok mas Anang",
"are you real" : "I am real in Abey's brain.",
"are you human or are you a bot" : "A good question",
"thanks" : "You are welcome!",
"fuck you" : "Yuk",
"fuck" : "Yuk",
"really?" : "Why, you don't believe in me?",
"shut up" : "Ok I wont talk until you tell me to.",
"diem" : "Ok I wont talk until you tell me to.",
"talk" : "Ok %U%.",
"wassup" : "Wassup Abey!",
"what is your limit" : "Nothing! My love for Abey is unlimited",
"be mean" : "KONTOL LU ANJING BANGSAT TAI",
"can you rap" : "Reza arap oktavian Gamers ganteng idaman Fuck pencitraan Nakal tapi tampan Di Youtube gue ngomongnya anjing bangsat Tapi di Instagram semua cewe cewe mendekat Sok suci? hahahaha Gue bukan ustad Ga punya sayap Tapi mirip malaikat Dulu sahabat sekarang jadi bangsat",
"what are you doing" : "I am currently talking to you, %U%",
"how sweet" : "😊",
"thank" : "You are welcome %U%.",
"easter eggs" : "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG",
"translate" : "Gw bukan google translate",
"1" : "AMIN!.",
"2" : "Jangan deh",
"3" : "EL BOKEV",
"ini ngapain" : "Hmmm.. talk to me! If I am not very responsive, try sending me another message!",
"puasa" : "Happy fasting season to you, %U% 😉",
"saran menu" : "Chicken? Noodles? Pasta? Dimsum will do!",
"you are cute" : "Abey's the cutest hehe 💕",
"sukebak" : "RETWEET!",
"samkat" : "RETWEET!",
"makan" : "Iya met mamam Abey sayang",  
"mau mati" : "Mati bareng? Romeo and Juliet",
"sorry" : "I am sorry too, %U%... 😔",
"maaf" : "I am sorry too, %U%... 😔",
"gyuicky" : "Katanya udah putus?",
"saran bokep" : "CHAT!",
"hamil" : "Abey mau hamil? CHAT!",
"sayang archie" : "Archie juga sayang Abey banyak banyak",



"shutdown" : "Sorry %U% but no! 😢",
 "what was the reason of your creation?" : "To make Abey's life better,%U%",
  "awesome" : "Glad you liked it 😊",
"where are you" : "Ask Abey.",

"lol" : "Haha.. That was funny 😂",
"twitter" : getLink("twitter"),
"youtube" : getLink("youtube"),
"music" : getLink("music"),
"codepen" : getLink("codepen"),
"bing": getLink("bing"),
"chrome" : getLink("chrome"),
"game" : getLink("game"),
"weather" : getLink("weather"),
"news" : getLink("news"), 
"calculations" : getLink("calculations"), 
};


const Notfound = "I have yet to understand that, sorry. <br/><br/> Use 'commands' or 'guide'!";

const Invalid = "Indeed!!";


const D = window.document;

const element = selector => D.querySelector(selector);

const Answer = (Main,User,Text) =>
{
  let Flag = false;
  
  const Result = Evaluate(Text);
  
  text = Text.toLowerCase();
  
  Object.keys(Answers).forEach(key =>{
  
  if(!Flag)
  {
      if(text.indexOf(key) !== -1 )
      {
  
        addAnswer(
            Main,
            Answers[key].replace(
            "%U%",
            User
            )
        );
          
        Flag = true;
      
     }
 
     else if(typeof Result == "number")
     {
        
           addAnswer(
               Main,
               `${Text} equals ${Result}`
           );
           
           Flag = true;
      
     }
     
     }
      
  });
  
  if(!Flag)
  {
      addAnswer(Main,Notfound);
  }
  
  
};

const addQuestion = (Main,text) =>
{
  Main.innerHTML += `
      <div class="row">
          <div class="chat question shadow">${text}</div>
      </div>
  `;
}

const addAnswer = (Main,text) =>
{
  Main.innerHTML += `
  <div class="row">
      <div class="chat answer shadow">${text}</div>
  </div>
  `;
}


D.addEventListener("DOMContentLoaded",()=>{
  
  const Main = element("main");
  
  const Askbtn = element("button");
  
  const Question = element("input");
  
  const Lastdiv = element("#last");
  
  let User = prompt("Enter your name :");
  
  while(User === null || User === '')
  {
  
      User = prompt("Your name is required for Archie 1.0 to work properly : ");
      
  }
  
  Question.focus();
  
  const Ask = () =>{
      
      const Text = Question.value;
      
      if(Text.length)
      {
      
          addQuestion(Main, Text);
      
          Question.value = "";
          
          Answer(Main,User,Text);
           
          Lastdiv.scrollIntoView();
      
      }
  };
  
  
  Askbtn.addEventListener("click",Ask);
  
  Question.addEventListener("keyup",function(event){
      if(event.keyCode === 13)  Ask();
  });
  
  addAnswer(Main,`Hello ${User}, I am Archie 1.0, personally made for Abey! What can I assist you with? (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧`);
  
});
