import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

interface categoryListType {
  id: number;
  name: string;
}

interface categoryParagraphType {
  id: number;
  text: string;
  count: number;
}

interface categoryParagraphListType {
  categoryId: number;
  paragraphs: categoryParagraphType[];
}

interface categoryOptionsListType {
  categoryId: number;
  options: {
    id: number;
    name: string;
  }[];
}

const categoriesList: categoryListType[] = [
  { id: 1, name: "Colors" },
  { id: 2, name: "Books of the bible" },
  { id: 3, name: "Subjects in School" },
  { id: 4, name: "Fruits" },
  { id: 5, name: "Weather Terms" },
];

const categoryParagraphsList: categoryParagraphListType[] = [
  {
    categoryId: 1,
    paragraphs: [
      {
        id: 1,
        text: "The wizard's tower stood tall against the gray morning sky, its ancient stones weathered by countless storms. Inside, magical potions bubbled in glass vials - some glowing with a brilliant green light that cast dancing shadows on the walls. The old sorcerer carefully measured drops of silver liquid into a cauldron, watching as the mixture turned a deep purple color. His apprentice nervously held a book bound in brown leather, reading instructions aloud while trying not to spill the precious ingredients. Outside the window, rose bushes bloomed in the garden, their petals catching the first rays of sunlight. The wizard smiled as he remembered his youth, when he first learned to brew potions under the guidance of his master. Those were simpler times, when magic seemed as natural as breathing. He added a pinch of crushed emeralds to the mixture, causing it to sparkle and fizz. The apprentice gasped in wonder, dropping the heavy tome with a loud thud. 'Patience, young one,' the wizard chuckled, 'magic cannot be rushed.' He stirred the potion clockwise three times, then counterclockwise twice. The mixture began to glow with an inner light, casting rainbow reflections on the ceiling. Soon, the transformation would be complete. The wizard had spent decades perfecting this particular spell. He picked up a crystal vial and carefully poured the finished potion inside. The apprentice watched in amazement as the liquid settled into perfect clarity. Tomorrow, they would test its power. The sun was setting now, painting the sky in brilliant shades. The wizard sealed the vial with wax and placed it on the highest shelf. Another successful day of magical research had come to an end.",
        count: 6,
      },
      {
        id: 2,
        text: "Captain Sarah adjusted her telescope and scanned the endless blue ocean stretching to the horizon. Her crew had been sailing for three weeks, searching for the legendary island marked on an ancient map drawn in faded ink. The ship's red sails billowed in the strong wind as they navigated through choppy waters. First mate Jenkins approached with a concerned expression, his weathered face showing worry lines earned from years at sea. 'Captain, the men are getting restless,' he said quietly. 'They're starting to doubt the treasure exists.' Sarah nodded thoughtfully, understanding their concerns but remaining determined to complete their quest. The sun beat down mercilessly, turning the wooden deck hot beneath their feet. She remembered her grandfather's stories about pirates and hidden gold, tales that had inspired her to become an explorer. Suddenly, the lookout in the crow's nest shouted excitedly, pointing toward a distant speck on the water. Through her spyglass, Sarah could make out the outline of land, exactly where the map indicated it should be. The crew erupted in cheers, their doubts forgotten in an instant. As they sailed closer, they could see white sandy beaches and tall palm trees swaying in the tropical breeze. The island appeared uninhabited, perfect for hiding valuable treasures. Birds circled overhead, their calls echoing across the water. Sarah ordered the anchor dropped in the shallow bay. The adventure was just beginning. Her heart raced with anticipation as she prepared to lead the landing party. This could be the discovery that changed everything. The crew loaded supplies into the small boats, ready to explore their mysterious destination.",
        count: 3,
      },
      {
        id: 3,
        text: "Detective Martinez stood in the art gallery, studying the empty frame where the famous painting once hung. The security camera footage showed a figure dressed entirely in black, moving like a shadow through the darkened halls. The thief had been incredibly skilled, avoiding every alarm and sensor with practiced precision. Gallery owner Mrs. Chen wrung her hands nervously, explaining how the artwork was worth millions and completely irreplaceable. The detective noticed small details others had missed - a single thread caught on the window latch, footprints barely visible on the polished marble floor. 'This wasn't a random crime,' Martinez thought, examining the evidence carefully. The stolen painting depicted a serene landscape with a golden sunset over rolling hills. Other valuable pieces remained untouched, suggesting the thief knew exactly what they wanted. A security guard mentioned seeing someone in a gray coat near the building earlier that evening. Martinez made notes, building a timeline of events in her mind. The investigation would require patience and methodical detective work. She interviewed each staff member, looking for inconsistencies in their stories. One curator seemed particularly nervous, avoiding eye contact and fidgeting with his hands. The detective's instincts told her there was more to this case than met the eye. She requested background checks on all employees with access to the gallery. Outside, rain began to fall, creating a somber atmosphere that matched the mood inside. The thief was clever, but everyone makes mistakes eventually. Martinez was determined to solve this puzzle and recover the stolen masterpiece. Her years of experience had taught her that persistence always pays off. The case would be challenging, but she welcomed the opportunity to test her skills against such a cunning opponent.",
        count: 4,
      },
      {
        id: 4,
        text: "The old house stood silhouetted against a sky painted in shades of **deep purple** and fiery **orange**. Its weather-beaten door, a faded **brown**, creaked ominously in the wind. A single, broken windowpane reflected the last rays of the **golden** sun. Inside, dusty cobwebs, almost **silver** in the dim light, hung from every corner. A worn armchair, once a vibrant **red**, now seemed to sag with forgotten stories. A small, ceramic vase on the mantelpiece held a single, dried **yellow** rose. On the wall, a faded tapestry depicted a scene of knights in shining armor and a majestic **blue** dragon. The floorboards, polished to a dark sheen, hinted at their original **black** color. A curious **green** beetle scuttled across the rug, disappearing beneath a loose thread. The air was thick with the scent of old wood and forgotten dreams. A sliver of **white** moonlight pierced through a gap in the curtains, illuminating a patch of the dusty floor. It was a place where time seemed to stand still, a silent sentinel of days gone by. The faint **pink** glow from a nearby neon sign flickered through the trees outside. A forgotten toy soldier, painted in **grey** camouflage, lay under a overturned chair. The silence was only broken by the rustling leaves outside, a gentle whispers of the night. A tiny **turquoise** gem, lost from a forgotten necklace, sparkled under the faint light. The atmosphere was both eerie and captivating. The shadow of a branch danced on the wall, like a skeletal hand. This house held its secrets close, wrapped in a shroud of quiet mystery.",
        count: 12,
      },
      {
        id: 5,
        text: "The bustling market was a kaleidoscope of colors and sounds. Baskets overflowed with ripe, **red** strawberries and plump, **orange** mandarins. A vendor, his stall draped in a vibrant **yellow** cloth, called out prices for his fresh produce. Nearby, a woman in a flowing **blue** dress haggled over the price of a handcrafted ceramic pot. Bundles of fragrant herbs, tied with **green** twine, filled the air with their earthy scent. Children, their faces smeared with ice cream, chased each other, their laughter echoing through the narrow aisles. A street artist, with hands stained with **purple** paint, meticulously worked on a canvas, depicting a bustling city scene. Bolts of fabric in every shade imaginable, from shimmering **gold** to deep **indigo**, were piled high. A group of tourists, their cameras flashing, admired a display of intricate **silver** jewelry. The aroma of freshly brewed coffee mingled with the sweet scent of exotic spices. A stack of old books, their pages turned **brown** with age, lay on a rickety table. A small dog, with shaggy **black** fur, wagged its tail hopefully at passersby. The sun beat down, casting long shadows across the cobblestone streets. A cheerful **pink** balloon floated above the crowd, momentarily catching the breeze. An old man, his beard a grizzled **white**, played a soulful tune on a wooden flute. The energy was palpable, a vibrant tapestry of human connection. The subtle gleam of **turquoise** pottery caught the eye of a curious shopper. The day was alive with color and sound. A **grey** cat observed the scene from a high ledge, its eyes narrowed in concentration. This market was a true feast for the senses.",
        count: 12,
      },
      {
        id: 6,
        text: "The ancient forest was a symphony of natural hues. Towering trees, their leaves a myriad of **green** shades, reached for the sky. The forest floor was carpeted with soft moss and decaying leaves, a rich **brown** tapestry. Sunlight dappled through the canopy, creating shifting patterns of light and shadow. A tiny **red** ladybug crawled slowly along a blade of grass. A crystal-clear stream, reflecting the **blue** of the sky, meandered through the trees. Wildflowers in shades of **yellow** and **purple** dotted the clearings. A flash of **orange** wings indicated a monarch butterfly fluttering past. The bark of some trees was almost **black**, stark against the lighter foliage. A family of deer, their coats a soft **tan**, grazed peacefully in a meadow. The air was crisp and clean, carrying the scent of pine and damp earth. A single **white** feather drifted down from above, landing softly on the forest floor. A shimmering **silver** spiderweb glistened with morning dew. The quiet hum of insects filled the air, a constant, soothing drone. A small **pink** mushroom pushed its way through the leaf litter. The distant mountains, shrouded in a gentle **grey** mist, stood sentinel over the landscape. A vibrant **teal** bird flitted between branches, its song a sweet melody. The forest held a timeless beauty, a place of peace and wonder. The subtle hint of **gold** on a fallen leaf caught the light. This natural sanctuary was a balm for the soul, a place to reconnect with the earth.",
        count: 12,
      },
      {
        id: 7,
        text: "The artist stood before the blank canvas, ready to create a masterpiece. First, she dipped her brush into vibrant red paint, splashing it across the top. Next, she added a calming blue sky with fluffy white clouds. A lush green forest grew at the bottom, dotted with yellow flowers. Suddenly, a mischievous orange cat jumped onto the table, knocking over a bottle of black ink. The artist sighed and reached for a brown rag to clean up the mess. As she worked, she noticed a purple butterfly land on the windowsill, inspiring her to add it to the painting. The final touch was a silver moon glowing in the twilight.",
        count: 8,
      },
      {
        id: 8,
        text: "The treasure hunt began at dawn, with a map marked with an X in bright pink. The first clue led to a golden key hidden under a gray rock. Next, they followed a path lined with white daisies until they reached a river as clear as crystal. A rusty old boat, painted in faded blue, waited on the shore. Crossing the river, they found a cave with walls covered in glowing green moss. Inside, a chest wrapped in black chains held the prize. But the lock was sealed with a red wax stamp, and the key snapped in half! The adventurers groaned, but then noticed a shiny silver coin on the ground—maybe luck was on their side after all.",
        count: 7,
      },
      {
        id: 9,
        text: "The carnival was a riot of color and sound. A giant yellow Ferris wheel spun lazily against the sky. Stalls offered cotton candy in fluffy pink and blue swirls. A clown in a polka-dotted purple suit juggled glowing green balls. Nearby, a fortune teller sat in a tent draped with red velvet curtains. Kids lined up for face painting, choosing between black spiderwebs or silver stars. The smell of buttery popcorn mixed with the sweet scent of orange soda. As the sun set, the lights flickered on, turning the whole scene into a rainbow of joy.",
        count: 7,
      },
    ],
  },
  {
    categoryId: 2,
    paragraphs: [
      {
        id: 1,
        text: "Professor Williams stood before his theology class, preparing to discuss the rich history of ancient texts. He opened his worn leather briefcase and pulled out several manuscripts, each one representing centuries of careful preservation. 'Today we'll explore how different cultures have interpreted sacred writings,' he announced to his eager students. The first document was a commentary on Genesis, written by medieval scholars who devoted their lives to understanding creation stories. Next, he showed them fragments that referenced the book of Ruth, a tale of loyalty and devotion that has inspired countless generations. His assistant, Mark, helped distribute copies of various translations to the class. The professor explained how the book of Acts chronicles the early spread of Christianity throughout the Roman Empire. Students took careful notes as he described the historical context surrounding these ancient writings. One student raised her hand and asked about the differences between various manuscript traditions. Professor Williams smiled, remembering his own curiosity as a young scholar. He had spent decades studying in libraries across Europe, examining texts that few people ever get to see. The conversation turned to the book of Daniel and its prophetic visions that have puzzled scholars for millennia. Another student mentioned reading about the epistle to the Romans and its theological significance. The professor nodded approvingly, pleased to see his students engaging with the material. He pulled out a magnifying glass to show them the intricate details of ancient calligraphy. The class period was flying by as they discussed manuscript preservation techniques. Tomorrow they would examine more texts, including passages from the book of Judges. The students packed their notebooks, excited to continue their exploration of these historical documents. Professor Williams locked his briefcase, satisfied with another productive day of teaching.",
        count: 7,
      },
      {
        id: 2,
        text: "The archaeological team had been excavating the ancient site for three months when they made their most significant discovery. Dr. Sarah Chen carefully brushed sand away from what appeared to be a sealed chamber beneath the ruins. Her colleague, Professor Martinez, documented every step of the process with meticulous notes and photographs. Inside the chamber, they found pottery shards and scrolls that seemed to date back thousands of years. The team's excitement was palpable as they realized the historical importance of their find. One scroll contained what appeared to be references to the book of Exodus, describing journeys through desert landscapes. Dr. Chen's hands trembled slightly as she handled the fragile papyrus, knowing she was touching something that connected her to ancient civilizations. The preservation was remarkable, thanks to the dry climate that had protected these artifacts for millennia. Graduate student Tim helped catalog each item, assigning numbers and taking detailed measurements. Another fragment mentioned the book of Kings, providing insights into royal chronicles that historians had long debated. The team worked late into the evening, their headlamps casting dancing shadows on the excavation walls. Dr. Martinez compared their findings to similar discoveries made in other regions, looking for patterns and connections. The local authorities had granted them permission to study the artifacts before they would be housed in the national museum. Each day brought new revelations about the people who had once lived in this place. The scrolls also contained references to the book of Job, with philosophical discussions about suffering and faith. Tomorrow they would invite experts from other universities to examine their discoveries. The team felt honored to be the first to study these ancient texts in modern times. Their research would contribute to humanity's understanding of historical religious practices. The excavation site had yielded treasures beyond their wildest expectations.",
        count: 4,
      },
      {
        id: 3,
        text: "The old monastery library was filled with ancient books and manuscripts, their leather bindings cracked with age but still holding precious knowledge. Brother Thomas had spent forty years as the monastery's librarian, carefully maintaining this collection for future generations. Each morning he would walk through the silent halls, checking on the condition of the most fragile texts. Today, a group of scholars had come to research medieval commentaries on various religious works. The first visitor was particularly interested in manuscripts that discussed the book of Matthew and its early interpretations. Brother Thomas guided them to a special section where the oldest documents were kept under controlled conditions. Another scholar wanted to examine texts related to the book of Revelation, with its complex symbolic imagery that had inspired artists for centuries. The library's climate control system hummed quietly, maintaining the perfect temperature and humidity for preservation. Professor Anderson from the university was researching connections between different manuscript traditions across Europe. She had already spent hours studying commentaries on the book of Psalms, taking careful notes about variations in different copies. The afternoon light filtered through stained glass windows, casting colorful patterns on the reading tables. Brother Thomas brought out a particularly rare manuscript that contained discussions of the book of Isaiah and its prophetic messages. The scholars worked in respectful silence, understanding the privilege of accessing these historical treasures. One researcher discovered marginal notes written by medieval monks, providing insights into how these texts were studied centuries ago. The library also housed manuscripts discussing the book of Luke, with detailed analysis of parables and teachings. As evening approached, the scholars reluctantly prepared to leave, knowing they would return tomorrow to continue their research. Brother Thomas carefully returned each manuscript to its proper storage location. The monastery's collection would continue to serve researchers and preserve human knowledge for generations to come. The day had been productive, advancing understanding of how ancient texts were transmitted through history.",
        count: 6,
      },
      {
        id: 4,
        text: `Genesis was the beginning of everything, but many still judged the events that followed. 
		Peter had a vision while John wrote revelations of things to come. 
		Numbers can confuse even the wisest, especially when Exodus is on their mind. 
		Esther stood firm, but Job’s patience was unmatched in troubled times. 
		Matthew always shared good news, even when Chronicles of pain echoed around him. 
		Luke the physician healed wounds deeper than Psalms could describe. 
		Romans liked order, but they couldn't deny the proverbs spoken in the streets. 
		Corinthians laughed and wept, tossed between wisdom and confusion. 
		Hebrews brewed strong debates on matters of faith and tradition. 
		Titus had a quiet strength that only Timothy could truly understand. 
		Acts of kindness spread like wildfire, despite what the Kings decreed. 
		Daniel dreamed while Amos shouted from rooftops, yet few listened. 
		Malachi warned, while James urged them to walk the talk. 
		Ecclesiastes found vanity in all, though Galatians sought grace. 
		Judges passed laws, but none like the law of Moses. 
		Leviticus details rituals, but few could follow its letter. 
		Lamentations echoed in silence after Jerusalem’s fall. 
		Revelation repeated the visions John had already shared. 
		Hosea loved relentlessly, and Jonah ran, but not for long. 
		Mark concluded with hope, anchored by the spirit in Acts.`,
        count: 20,
      },
      {
        id: 5,
        text: `Genesis often gets referenced in scientific debates, yet it holds poetic beginnings. 
		Exodus scenes are echoed in movies, though the original message is deeper. 
		Leviticus sounds rigid, but teaches discipline. 
		Numbers feel chaotic until you find their hidden order. 
		Deuteronomy is the final charge, the last speech before legacy begins. 
		Joshua took courage and conquered, like David before Goliath. 
		Judges showed what happens without clear leadership. 
		Ruth was loyalty embodied in human form. 
		Samuel heard whispers in the night, writing them down as Kings reigned. 
		Chronicles remembered what others forgot. 
		Ezra and Nehemiah rebuilt what Babylon had torn apart. 
		Esther rose for such a time as that. 
		Job kept his faith through unbearable silence. 
		Psalms were sung in fields and on battlefields. 
		Proverbs whispered in markets and schools alike. 
		Ecclesiastes kept asking why, while others moved on. 
		Isaiah shouted warnings like a voice in the desert. 
		Jeremiah wept, but Lamentations wept louder. 
		Ezekiel saw wheels and dry bones dancing. 
		Daniel stood in flames and in a lion’s den.`,
        count: 20,
      },
      {
        id: 6,
        text: `Hosea’s love story challenged even the most faithful. 
		Joel painted pictures of locusts and redemption. 
		Amos warned the rich, while Obadiah scolded Edom. 
		Jonah ran but returned with a sermon. 
		Micah asked what the Lord requires of man. 
		Nahum declared vengeance, Habakkuk questioned justice. 
		Zephaniah saw the day of the Lord with clarity. 
		Haggai called the people to build again. 
		Zechariah saw flying scrolls and golden lampstands. 
		Malachi closed the Old Testament with questions. 
		Matthew began the gospel tale, followed by Mark’s urgency. 
		Luke added detail, while John focused on divinity. 
		Acts carried the spark of Pentecost. 
		Romans set doctrine in stone. 
		Corinthians were letters of rebuke and hope. 
		Galatians fought for grace, not law. 
		Ephesians mapped out spiritual armor. 
		Philippians sang in chains. 
		Colossians defended Christ’s supremacy. 
		Thessalonians waited patiently for the return.`,
        count: 20,
      },
    ],
  },
  {
    categoryId: 3,
    paragraphs: [
      {
        id: 1,
        text: 'She\'d often use her "history" of being a good student to "math" out an excuse for not finishing her "English" homework, always managing to "science" her way out of detention.',
        count: 4,
      },
      {
        id: 2,
        text: "Their chemistry was undeniable, but over time, it became a history of miscommunications, written like bad literature and solved with the cold logic of math.",
        count: 4,
      },
    ],
  },
  {
    categoryId: 4,
    paragraphs: [
      {
        id: 1,
        text: "Sarah decided to visit the local farmer's market on Saturday morning to buy fresh ingredients for her family's weekend brunch. She walked through the colorful stalls, admiring the variety of produce displayed in wooden crates and wicker baskets. The first vendor she approached had the most beautiful strawberries she had ever seen, their red color glistening in the morning sunlight. Next to them sat plump blueberries that looked perfect for making pancakes, their deep blue hue indicating they were perfectly ripe. Sarah picked up a container of each, already imagining how delicious they would taste. She continued browsing and found a stand selling tropical fruits that reminded her of her vacation in Hawaii last year. The vendor recommended a perfectly ripe mango, explaining that it would be sweet and juicy when cut open. Sarah also grabbed a fresh pineapple, its golden exterior promising the sweet, tangy flavor inside. As she walked further, she noticed an elderly woman selling apples from her own orchard, each one polished to a perfect shine. The woman explained that these were heritage varieties, much more flavorful than store-bought options. Sarah selected several different types, excited to try them in her homemade apple pie recipe. At another stall, she discovered bunches of bananas at various stages of ripeness, perfect for different uses throughout the week. The vendor suggested the greener ones for cooking and the yellower ones for eating fresh. Sarah picked up a bunch and added them to her growing collection of purchases. She also found some beautiful oranges that the seller claimed were the juiciest in the entire market. Before leaving, she spotted a display of exotic fruits she had never tried before, including some that looked like they belonged in a tropical paradise. The market visit had been more successful than she had hoped, and she couldn't wait to get home and start cooking. Her family would be thrilled with all the fresh, delicious options she had found. The morning had been perfect for shopping, with cool temperatures and gentle breezes making the experience enjoyable.",
        count: 7,
      },
      {
        id: 2,
        text: "Chef Rodriguez was preparing for the restaurant's new summer menu, focusing on dishes that would showcase the season's best produce. He had spent weeks researching recipes that would highlight fresh, local ingredients while creating memorable dining experiences for his customers. The first course he planned featured a salad with mixed greens, candied pecans, and fresh berries that would provide a perfect balance of flavors and textures. He wanted to include grapes in the salad, their natural sweetness complementing the tangy vinaigrette he had been perfecting. The main course would be a grilled chicken dish served with a fruit salsa made from diced peaches, red onions, and fresh herbs. Chef Rodriguez had tested this combination multiple times, and the sweet peaches paired beautifully with the savory elements of the dish. For dessert, he planned to create a tart featuring seasonal fruits arranged in an artistic pattern that would impress even the most discerning food critics. The kitchen staff had been practicing the new recipes for weeks, ensuring every dish met the restaurant's high standards. Chef Rodriguez believed that using the freshest ingredients was the key to creating extraordinary meals that customers would remember long after leaving. He had established relationships with local farmers who could provide the quality produce his menu demanded. The restaurant's reputation depended on consistency and excellence in every dish they served. His sous chef suggested adding a coconut cream sauce to one of the desserts, which would add a tropical element to the menu. Chef Rodriguez considered this idea carefully, knowing that balance was crucial in menu development. The summer menu would launch next month, and advance reservations were already filling up quickly. Food critics from the city's major newspapers had requested preview tastings. Chef Rodriguez felt confident that his new menu would exceed expectations and attract new customers to the restaurant. The combination of creativity, quality ingredients, and skilled preparation would make this summer season the restaurant's most successful yet. He looked forward to seeing diners' reactions to his innovative dishes. The months of planning and preparation were about to pay off.",
        count: 4,
      },
      {
        id: 3,
        text: "The elementary school was organizing its annual healthy eating week, and Mrs. Patterson had volunteered to coordinate educational activities for the third-grade students. She had planned a series of fun lessons that would teach children about nutrition while encouraging them to try new foods. The first activity involved creating colorful fruit charts where students could learn about different vitamins and minerals found in various produce. Mrs. Patterson brought in samples of cherries, explaining how their deep red color indicated high levels of antioxidants that help keep bodies healthy. She also showed the children lemons, demonstrating how citrus fruits provide vitamin C that helps prevent illness and supports immune system function. The students were fascinated by the different shapes, colors, and textures of the fruits she had brought for the demonstration. One student asked about watermelon, wondering why it was called a fruit when it seemed so different from others they had seen. Mrs. Patterson explained that watermelon is indeed a fruit, and its high water content makes it perfect for staying hydrated during hot summer days. Another child wanted to know about kiwi, having never seen the fuzzy brown exterior that hides the bright green flesh inside. The teacher cut open the kiwi to show them the beautiful pattern of seeds arranged in a circle, explaining how this fruit originally came from New Zealand. The students were amazed by how different fruits could look on the outside compared to their interior appearance. Mrs. Patterson had prepared worksheets where students could draw their favorite fruits and write about why they enjoyed eating them. The classroom was filled with excitement as children shared stories about helping their families pick fruits from trees in their yards. Some students talked about visiting farms where they had seen fruits growing on plants and trees. The lesson concluded with each student choosing their favorite fruit to take home and share with their families. Mrs. Patterson felt proud of how engaged the children had been throughout the educational session. The healthy eating week was already proving to be a success, with students showing genuine interest in learning about nutrition. Tomorrow they would explore vegetables, but today had been all about celebrating the natural sweetness and variety of fruits. The principal had stopped by to observe the lesson and complimented Mrs. Patterson on her creative teaching methods.",
        count: 6,
      },
      {
        id: 4,
        text: "The farmer's market was bustling with color and life. Ripe red apples were stacked high in wooden crates, next to bunches of yellow bananas. A vendor offered samples of juicy orange slices, while another sold sweet purple grapes by the pound. Nearby, a child begged their mom for a slice of watermelon, its pink flesh glistening in the sun. The smell of fresh pineapple mingled with the earthy aroma of green kiwi fruits. A baker sold pies filled with tart lemon curd and sweet blueberry compote. As I reached for a plump strawberry, I noticed a basket of fuzzy peaches that looked perfectly ripe. The market was a paradise for fruit lovers!",
        count: 9,
      },
      {
        id: 5,
        text: "My smoothie recipe is packed with delicious fruits! I start with a frozen banana for creaminess, then add tangy mango chunks and a handful of dark cherries. A squeeze of lime juice brightens the flavor, while ripe pear adds natural sweetness. Sometimes I throw in some red raspberries for a tart kick, or swap them out for blackberries when they're in season. A spoonful of acai powder gives it an antioxidant boost, and coconut water makes the perfect liquid base. For extra nutrition, I blend in spinach—you can't taste it over the sweet fruits! My secret ingredient? A few slices of dragon fruit for a stunning pink color.",
        count: 8,
      },
      {
        id: 6,
        text: "The tropical island was a fruit lover's dream. Coconut palms swayed in the breeze, their husks ready to be cracked open for refreshing water. Papaya trees grew wild along the paths, their orange fruits almost too beautiful to eat. At breakfast, we feasted on plates of fresh guava, its pink flesh dotted with tiny seeds. The hotel bartender made incredible cocktails with muddled passionfruit and slices of starfruit as garnish. One afternoon, we discovered a tree heavy with pomelo fruits, like giant grapefruits but sweeter. Even the hummingbirds seemed drunk on nectar from the pineapple flowers!",
        count: 7,
      },
    ],
  },
  {
    categoryId: 5,
    paragraphs: [
      {
        id: 1,
        text: "The meteorologist at Channel 7 News was preparing for the evening weather forecast, reviewing the latest data from weather stations across the region. She had been tracking a major storm system that was expected to bring significant changes to the area over the next few days. The satellite images showed massive cloud formations moving in from the west, indicating that rain was likely to begin sometime after midnight. Her computer models suggested that the precipitation could be heavy at times, potentially causing minor flooding in low-lying areas. The temperature was expected to drop significantly once the storm arrived, bringing relief from the recent heat wave that had gripped the city. She noticed that wind speeds were increasing throughout the afternoon, with gusts reaching up to thirty miles per hour in some locations. The barometric pressure was falling rapidly, which often indicated that severe weather was approaching the area. Local emergency management officials had been contacted about the possibility of thunderstorms developing later in the evening. The meteorologist wanted to ensure that viewers were properly informed about the changing conditions so they could make appropriate plans. She had been monitoring radar data all afternoon, watching as the storm system intensified over the neighboring state. The forecast called for cooler temperatures and cloudy skies to persist through the weekend, with occasional breaks in the weather pattern. Humidity levels were expected to remain high even after the storm passed, making the air feel sticky and uncomfortable. The meteorologist prepared her graphics and maps, making sure to highlight areas where the most severe weather was expected. She had learned from years of experience that clear communication was essential when warning the public about potentially dangerous conditions. The evening newscast would begin in just a few hours, and she wanted to be thoroughly prepared. Viewers depended on accurate forecasts to plan their daily activities and stay safe during severe weather events. The storm system was still several hours away, but preparation was key to effective weather reporting. Her team had been working since early morning to gather all the necessary information for the broadcast. The responsibility of keeping the community informed about weather hazards was something she took very seriously. Tomorrow's forecast would largely depend on how quickly this storm system moved through the region.",
        count: 8,
      },
      {
        id: 2,
        text: "The camping trip had been planned for months, but the group of friends hadn't anticipated the dramatic weather changes that would challenge their outdoor adventure. They had packed for warm, sunny conditions based on the forecast they had checked weeks earlier. Unfortunately, the weather patterns had shifted, and they now found themselves dealing with unexpected precipitation that started as a light drizzle. The temperature had dropped fifteen degrees from what they had expected, making their lightweight clothing insufficient for the current conditions. Mark, the group's unofficial leader, suggested they move their campsite to a more sheltered location before the weather worsened. The fog was beginning to roll in from the nearby mountains, reducing visibility and making navigation more difficult than they had anticipated. Sarah pulled out her weather radio to check for updated forecasts, hoping to get some information about how long these conditions might persist. The group huddled together in the largest tent, listening to the sounds of the forest around them as moisture began to settle on everything. Tom had brought extra tarps that they could use to create additional shelter if the current weather pattern continued overnight. The wind was picking up, causing the trees to sway and creating an eerie atmosphere that none of them had experienced before. Despite the challenging conditions, the friends were determined to make the best of their situation and continue enjoying their time together. They had planned this trip as a way to disconnect from technology and reconnect with nature, even if nature was being less cooperative than expected. Jessica suggested they could use this as an opportunity to test their outdoor survival skills in real conditions. The group spent the afternoon securing their camp and preparing for whatever weather might come their way. They had enough food and supplies to last several days, so they weren't concerned about their basic needs. The experience was teaching them valuable lessons about adaptability and the importance of being prepared for unexpected situations. By evening, they had transformed their original campsite into a much more weather-resistant setup. The friends gathered around their camp stove, sharing stories and laughing about their meteorological adventure. Tomorrow they would reassess the situation and decide whether to continue their planned hiking activities or modify their itinerary based on conditions.",
        count: 5,
      },
      {
        id: 3,
        text: "The annual county fair was scheduled to begin on Friday, but the event coordinators were closely monitoring weather conditions that could impact the outdoor festivities. The fairgrounds had been set up for weeks, with carnival rides, food vendors, and exhibition tents arranged across the large field. Thursday evening brought unexpected developments when the local weather service issued advisories about potential storms in the area. Fair manager David Thompson called an emergency meeting with his staff to discuss contingency plans for various weather scenarios. The most immediate concern was the possibility of lightning, which would require shutting down all the mechanical rides for safety reasons. The forecast indicated that conditions could change rapidly, with periods of sunshine alternating with periods of cloud cover throughout the weekend. Vendor coordinators were notified about the potential need to secure loose items and protect merchandise from any moisture that might occur. The livestock barn managers were particularly concerned about maintaining proper ventilation while keeping animals comfortable during temperature fluctuations. David had been managing county fairs for over twenty years and had learned to always prepare for unexpected weather challenges. The entertainment schedule included outdoor concerts that might need to be moved to covered areas if conditions deteriorated. Ticket sales had been strong, and hundreds of families were planning to attend the fair regardless of minor weather inconveniences. The food vendors had experience dealing with various weather conditions and had already implemented protective measures for their equipment. Fair officials decided to increase the frequency of weather updates and announcements to keep visitors informed throughout the event. The local radio station agreed to provide regular weather bulletins specifically focused on conditions at the fairgrounds. Emergency services personnel were placed on standby in case weather-related incidents required immediate response. Despite the concerns, the fair board remained optimistic that the event would proceed successfully with appropriate precautions in place. The community had been looking forward to this annual celebration for months, and everyone was committed to making it a safe and enjoyable experience. Weather monitoring equipment had been installed at the fairgrounds to provide real-time data about local conditions. The opening ceremony was still scheduled for Friday evening, with backup plans ready to implement if necessary.",
        count: 6,
      },
      {
        id: 4,
        text: "The weather forecast predicted a wild week ahead. Monday would start with gentle sunshine warming the crisp morning air. By afternoon, dark clouds would roll in, bringing heavy rain and occasional thunder. Tuesday might see hail the size of marbles bouncing off rooftops. The humidity would rise midweek, creating muggy conditions perfect for fog over the lakes. Thursday promised a break with clear skies and a light breeze—ideal for picnics. But meteorologists warned of an approaching hurricane that could bring destructive winds by weekend. 'It's just a drizzle now,' said the reporter, as lightning flashed behind her. Viewers were advised to watch for tornado warnings in areas with sudden temperature drops.",
        count: 9,
      },
      {
        id: 5,
        text: "Our camping trip was at the mercy of the elements. The first night, we fell asleep to the peaceful patter of rain on our tent. At dawn, a thick mist covered the valley like a blanket. By noon, the scorching sun had burned it all away. That evening, we saw an incredible rainbow after a brief shower. But our luck changed when a snowstorm blew in unexpectedly—in June! The freezing temperatures turned our water bottles to ice overnight. Next morning brought sleet that stung our faces as we packed up. Just as we reached the car, a gust of wind nearly took my hat! We drove home through flooded roads, grateful for the adventure but ready for some calm weather.",
        count: 8,
      },
      {
        id: 6,
        text: "The sailors studied the sky nervously. The barometer was dropping fast, signaling an approaching storm. What began as mild waves soon became a raging typhoon with winds howling like ghosts. Rain fell in sheets, reducing visibility to near zero. Between thunderclaps, they heard the ominous creak of the mast. A waterspout formed in the distance, its swirling vortex terrifying to behold. The captain ordered all hands below deck as hail began pelting the ship. After hours of battling the squall, they emerged to find a double rainbow arching over calm seas. The tropical depression had passed, leaving only a light drizzle and lessons about respecting nature's power.",
        count: 7,
      },
    ],
  },
];

const categoryOptionsList: categoryOptionsListType[] = [
  {
    categoryId: 1,
    options: [
      { id: 1, name: "Red" },
      { id: 2, name: "Blue" },
      { id: 3, name: "Green" },
      { id: 4, name: "Yellow" },
      { id: 5, name: "Purple" },
      { id: 6, name: "Orange" },
      { id: 7, name: "Pink" },
      { id: 8, name: "Brown" },
      { id: 9, name: "Black" },
      { id: 10, name: "White" },
      { id: 11, name: "Gray" },
      { id: 12, name: "Silver" },
    ],
  },
  {
    categoryId: 2,
    options: [
      { id: 1, name: "Genesis" },
      { id: 2, name: "Exodus" },
      { id: 3, name: "Matthew" },
      { id: 4, name: "Mark" },
      { id: 5, name: "Luke" },
      { id: 6, name: "John" },
      { id: 7, name: "Acts" },
      { id: 8, name: "Romans" },
      { id: 9, name: "Psalms" },
      { id: 10, name: "Isaiah" },
      { id: 11, name: "Daniel" },
      { id: 12, name: "Revelation" },
    ],
  },
  {
    categoryId: 3,
    options: [
      { id: 1, name: "Maths" },
      { id: 2, name: "English" },
      { id: 3, name: "Trade" },
      { id: 3, name: "Trade" },
      { id: 3, name: "Trade" },
      { id: 3, name: "Trade" },
      { id: 3, name: "Trade" },
      { id: 3, name: "Trade" },
      { id: 3, name: "Trade" },
      { id: 3, name: "Trade" },
      { id: 3, name: "Trade" },
      { id: 3, name: "Trade" },
    ],
  },
  {
    categoryId: 4,
    options: [
      { id: 1, name: "Apple" },
      { id: 2, name: "Banana" },
      { id: 3, name: "Orange" },
      { id: 4, name: "Strawberry" },
      { id: 5, name: "Grape" },
      { id: 6, name: "Pineapple" },
      { id: 7, name: "Mango" },
      { id: 8, name: "Peach" },
      { id: 9, name: "Cherry" },
      { id: 10, name: "Lemon" },
      { id: 11, name: "Watermelon" },
      { id: 12, name: "Kiwi" },
    ],
  },
  {
    categoryId: 5,
    options: [
      { id: 1, name: "Rain" },
      { id: 2, name: "Snow" },
      { id: 3, name: "Thunder" },
      { id: 4, name: "Lightning" },
      { id: 5, name: "Wind" },
      { id: 6, name: "Fog" },
      { id: 7, name: "Cloud" },
      { id: 8, name: "Sunshine" },
      { id: 9, name: "Storm" },
      { id: 10, name: "Temperature" },
      { id: 11, name: "Humidity" },
      { id: 12, name: "Pressure" },
    ],
  },
];

const ListenUp = () => {
  const [screen, setScreen] = useState<
    "role" | "category" | "arbiter_paragraphs" | "arbiter_read" | "player_game"
  >("role");
  const [role, setRole] = useState<"arbiter" | "player" | null>(null);
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [paragraph, setParagraph] = useState<categoryParagraphType | null>(
    null
  );
  const [startTime, setStartTime] = useState<number | null>(null);
  const [buttonPresses, setButtonPresses] = useState<Record<number, number>>(
    {}
  );
  const [showConfirmStop, setShowConfirmStop] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (startTime !== null) {
      timerRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 100);
    }
    return () => clearInterval(timerRef.current!);
  }, [startTime]);

  const playSound = () => {
    const audio = new Audio("/pop.mp3");
    audio.play();
  };

  const handleOptionClick = (id: number) => {
    if (!startTime) return;
    if (buttonPresses[id] !== undefined) return;
    playSound();
    setButtonPresses((prev) => ({ ...prev, [id]: elapsedTime }));
  };

  const currentOptions =
    categoryOptionsList.find((cat) => cat.categoryId === categoryId)?.options ||
    [];
  const currentParagraphs =
    categoryParagraphsList.find((cat) => cat.categoryId === categoryId)
      ?.paragraphs || [];

  return (
    <div className="min-h-screen p-2 bg-gray-100 flex flex-col items-center text-center">
      {screen === "role" && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Select Your Role</h2>
          <div className="flex space-x-6">
            <button
              className="bg-[#6e56b6] text-white px-4 py-2 rounded-lg text-sm cursor-pointer"
              onClick={() => {
                setRole("arbiter");
                setScreen("category");
              }}
            >
              Arbiter
            </button>
            <button
              className="bg-[#6e56b6] text-white px-4 py-2 rounded-lg text-sm cursor-pointer"
              onClick={() => {
                setRole("player");
                setScreen("category");
              }}
            >
              Player
            </button>
          </div>

          <button className="text-sm underline" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      )}

      {screen === "category" && (
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-bold">
            Select Category for {role?.toLocaleUpperCase()}
          </h2>
          <div className="grid grid-cols-1 gap-2">
            {categoriesList.map((cat) => (
              <button
                className="bg-[#6e56b6] text-white px-4 py-2 rounded-lg text-sm cursor-pointer"
                key={cat.id}
                onClick={() => {
                  setCategoryId(cat.id);
                  if (role === "arbiter") setScreen("arbiter_paragraphs");
                  else setScreen("player_game");
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <button
            className="text-sm underline"
            onClick={() => setScreen("role")}
          >
            Back
          </button>
        </div>
      )}

      {role === "arbiter" && screen === "arbiter_paragraphs" && (
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-bold">Select Paragraph</h2>
          <div className="grid grid-cols-2 gap-4">
            {currentParagraphs.map((p) => (
              <button
                className="border border-gray-400 rounded-md flex flex-col justify-center items-center p-4"
                key={p.id}
                onClick={() => {
                  setParagraph(p);
                  setScreen("arbiter_read");
                }}
              >
                <span>Story {p.id}</span>
                <span> (Mentions: {p.count})</span>
              </button>
            ))}
          </div>

          <button
            className="text-sm underline"
            onClick={() => setScreen("category")}
          >
            Back
          </button>
        </div>
      )}

      {role === "arbiter" && screen === "arbiter_read" && paragraph && (
        <div className="space-y-4 [@media(orientation:landscape)]:max-w-xl max-w-[300px]">
          <h2 className="text-xl font-bold">Story</h2>
          <p className="bg-white p-4 rounded shadow text-left">
            {paragraph.text}
          </p>
          <p className="text-sm">Mentions: {paragraph.count}</p>
          <button
            className="text-sm underline"
            onClick={() => setScreen("arbiter_paragraphs")}
          >
            Back
          </button>
        </div>
      )}

      {role === "player" && screen === "player_game" && (
        <div className="w-full space-y-4">
          <h2 className="text-xl font-bold">Game</h2>
          <div className="flex justify-between gap-2">
            <button
              className="bg-[#6e56b6] text-white px-4 py-2 rounded-lg text-sm cursor-pointer flex-1 disabled:opacity-50"
              disabled={!!startTime}
              onClick={() => setStartTime(Date.now())}
            >
              Start
            </button>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm cursor-pointer flex-1 disabled:opacity-50"
              onClick={() => setShowConfirmStop(true)}
            >
              Stop
            </button>
          </div>

          <div
            className={`
              grid gap-4
              grid-cols-2 grid-rows-6
              [@media(orientation:landscape)]:grid-cols-6 [@media(orientation:landscape)]:grid-rows-2
            `}
          >
            {currentOptions.map((opt) => (
              <button
                key={opt.id}
                className={`border border-gray-500 rounded-md w-full flex flex-col gap-2 p-4 ${
                  buttonPresses[opt.id] !== undefined ? "opacity-50" : ""
                }`}
                disabled={buttonPresses[opt.id] !== undefined}
                onClick={() => handleOptionClick(opt.id)}
              >
                <div className="text-base font-bold">{opt.name}</div>
                <div
                  className={`text-xs ${
                    buttonPresses[opt.id] !== undefined ? "font-bold" : ""
                  } `}
                >
                  {buttonPresses[opt.id] !== undefined
                    ? (buttonPresses[opt.id] / 1000).toFixed(1) + "s"
                    : (elapsedTime / 1000).toFixed(1) + "s"}
                </div>
              </button>
            ))}
          </div>

          {showConfirmStop && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded shadow w-11/12 max-w-sm space-y-4">
                <p>Are you sure you want to stop this session?</p>
                <div className="flex gap-2 items-center justify-center">
                  <button
                    className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm cursor-pointer"
                    onClick={() => {
                      setShowConfirmStop(false);
                      setScreen("role");
                      setStartTime(null);
                      setElapsedTime(0);
                      setButtonPresses({});
                    }}
                  >
                    Yes, End Game
                  </button>
                  <button
                    className="bg-[#6e56b6] text-white px-4 py-2 rounded-lg text-sm cursor-pointer"
                    onClick={() => setShowConfirmStop(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ListenUp;
