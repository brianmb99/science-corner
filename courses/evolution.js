/* Evolution — twenty nights. Bridge from atoms, bonds, and molecules. */
(function () {
  window.SCIENCE_COURSES = window.SCIENCE_COURSES || [];
  window.SCIENCE_COURSES.push({
    id: "evolution",
    title: "Evolution",
    added: "2026-11-08",
    blurb: "From DNA — a molecule you can describe with the chemistry you just finished — to natural selection, fossils, and the human twig on the tree of life.",
    lessons: [
      {
        id: "same-stuff",
        title: "Made of the Same Stuff",
        tease: "Life uses ordinary atoms, then does something a rock cannot.",
        reviewLabel: "From chemistry",
        review: [
          "You already know the ingredients. Protons, neutrons, and electrons make atoms. Atoms stick together by sharing or trading electrons, and that stickiness is a chemical bond. A molecule is atoms that have stuck.",
          "Tonight we don't leave that behind. We ask what some molecules can do that a rock never does."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "A rock is made of atoms. So are you. So is a beetle, a pine tree, and the bacteria on a doorknob. There is no special life-atom hiding on the periodic table. The difference is not the ingredients. It is what some arrangements of those ingredients can do.",
              "Living things are made of cells. A cell is a tiny room. The walls are molecules, and the room is full of more molecules, bumping into each other in water. You have tens of trillions of these rooms. A bacterium is one room, living on its own. In plants and animals, the DNA sits in an inner room called the nucleus. Bacteria have DNA too, just not in a nucleus.",
              "DNA is a molecule you could describe with the chemistry you already have. Its backbone is sugar and phosphate, held by strong covalent bonds. Four kinds of bases hang off that backbone: adenine, cytosine, guanine, and thymine — A, C, G, and T. Two strands lie side by side. The bases reach across and hold with hydrogen bonds, which are weaker, so the strands can be pulled apart without snapping the backbone."
            ]
          },
          {
            type: "ask",
            text: "Hydrogen bonds showed up in chemistry as a weaker attraction. Why would 'weaker' be useful in DNA, instead of a flaw?"
          },
          {
            type: "prose",
            paragraphs: [
              "A cell can open that zipper, match a new base to each old one, and end up with two DNA molecules where there was one. As far as we know, every living thing on Earth uses this trick. A granite rock does not. A flame does not, even though a flame grows and takes in fuel. DNA can be copied, letter by letter, and the copy can be copied again.",
              "That is the bridge from the chemistry unit to this whole month. Life is not a different kind of matter. It is matter that copies a recipe, and then does it again, for billions of years, with small changes along the way. Tomorrow we look at the recipe itself."
            ]
          },
          {
            type: "aside",
            title: "A fence we can leave for later",
            text: "A few viruses use RNA instead of DNA, and biologists still argue about whether viruses count as alive. They are molecules that get copied too, but only by borrowing a cell. You don't need that fight tonight."
          }
        ],
        activity: {
          links: [
            {
              kind: "Look",
              title: "What are DNA and Genes?",
              source: "Learn.Genetics · University of Utah",
              url: "https://learn.genetics.utah.edu/content/basics/dna/",
              note: "A short, clear tour. Tap through it together if you want pictures of the real molecule."
            }
          ]
        },
        talk: [
          "If you could shrink down and stand inside a cell, would you expect tiny animals, or a crowd of molecules in water?",
          "What can DNA do that the molecules in a rock cannot?"
        ],
        lights: "Life is ordinary matter, arranged so a recipe can be copied."
      },
      {
        id: "longest-recipe",
        title: "The Longest Recipe",
        tease: "Four letters, hydrogen bonds, and a gene that is only a stretch of them.",
        reviewLabel: "Yesterday",
        review: [
          "Living things are made of the same kinds of atoms as everything else. What is special is DNA: a molecule with a strong backbone and weaker hydrogen bonds down the middle, so it can be unzipped and copied."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "Each unit of DNA is a nucleotide. That is a package of three parts: a sugar, a phosphate, and one base. The sugars and phosphates link into the sides of a ladder. The bases are the rungs. The shape is a twisted ladder, a double helix, because that is how these molecules fit when they stack.",
              "The rungs are picky. A holds T, with two hydrogen bonds. C holds G, with three. A does not hold C. The shapes and the charges don't line up. So if one strand says A-C-T-G, the other strand has to say T-G-A-C. Each strand is a template for the other. That is why copying is possible at all.",
              "A gene is not the whole ladder. A gene is a stretch of bases the cell knows how to read. Humans have on the order of 20,000 genes, scattered through about three billion letters. A lot of the DNA between genes is not a protein recipe. Some of it is switches, telling a gene when to be read. None of it is junk we get to ignore, and none of it is a secret message in English. It is chemistry."
            ]
          },
          {
            type: "ask",
            text: "If one strand reads C-C-A-T, what must the other strand read? Don't peek at the activity yet if you want to try it cold."
          },
          {
            type: "prose",
            paragraphs: [
              "Here is the part that will matter all month. The order of the letters is the information. Change the order, and you may change what the cell builds. The molecule doesn't know what it 'means.' It just holds still long enough to be copied, and to be read. Tomorrow: what happens when the copy isn't perfect."
            ]
          }
        ],
        activity: {
          widget: "pairs",
          links: [
            {
              kind: "Try",
              title: "Build a DNA Molecule",
              source: "Learn.Genetics · University of Utah",
              url: "https://learn.genetics.utah.edu/content/basics/builddna/",
              note: "Happier on a computer than on a phone. The matcher on this page is the one to use here."
            }
          ]
        },
        talk: [
          "Why can the cell copy DNA, instead of having to invent a new strand from scratch every time?",
          "Is a gene the whole DNA molecule, or a stretch of it?"
        ],
        lights: "A pairs with T, C pairs with G, and a gene is a readable stretch of those letters."
      },
      {
        id: "copy-typos",
        title: "Copying, and the Typos",
        tease: "Most copies are astonishingly good. A few letters still change.",
        reviewLabel: "Yesterday",
        review: [
          "DNA is a twisted ladder. A holds T, C holds G, by hydrogen bonds. One strand is a template for the other, and a gene is a stretch of letters the cell can read."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "When a cell copies DNA, it unzips the ladder and builds a new strand on each side. The machinery is good at this, and it even proofreads. It is not perfect. A wrong base sometimes stays. Radiation, and some chemicals, can damage a letter too. A change in the sequence is a mutation.",
              "The word sounds like a monster movie. It isn't a judgment. A mutation is a typo. Most typos do nothing you could notice. Some break a gene. A few, rarely, change a trait in a way that turns out to be useful in a particular place. The mutation does not happen because it would be useful. The copy error happens first. Usefulness, if it ever shows up, comes later.",
              "Here is a number worth keeping. A human baby is born with on the order of a hundred new letter changes that neither parent had, out of three billion letters. That is a stunningly accurate copy, and it is still not a photocopy. Those new letters are the raw material evolution has to work with."
            ]
          },
          {
            type: "ask",
            text: "If a copy error happens in a skin cell, on your arm, does a future child inherit it? What would have to be true for a child to inherit a mutation?"
          },
          {
            type: "prose",
            paragraphs: [
              "Only mutations in the cells that become eggs or sperm get passed on. A scar, a suntan, a muscle you built, a mutation in your skin: those stay in this body. That is easy to say and hard to remember, because it is tempting to think a life writes itself into the recipe. It doesn't. The recipe that goes forward is the one in the egg and the sperm.",
              "The copier below is sloppy on purpose, so a typo shows up before you fall asleep. Real cells are much, much more careful. Watch the gold letters anyway. Nobody chose them."
            ]
          }
        ],
        activity: {
          widget: "copies",
          links: [
            {
              kind: "Read",
              title: "Mutations are changes in genetic information",
              source: "Understanding Evolution · UC Berkeley",
              url: "https://evolution.berkeley.edu/evolution-101/mechanisms-the-processes-of-evolution/mutations/",
              note: "A clear museum page if you want the grown-up version of tonight's idea."
            }
          ]
        },
        talk: [
          "Why is it important that mutations are not 'trying' to help?",
          "Would you rather a copy machine made zero mistakes forever, or a very small number? What would each world be like?"
        ],
        lights: "A mutation is a copy error. Only errors in egg or sperm cells can be inherited, and they are not made on purpose."
      },
      {
        id: "recipe-to-body",
        title: "From Recipe to a Living Body",
        tease: "The cell reads DNA in threes and builds a protein that folds into a shape.",
        reviewLabel: "Yesterday",
        review: [
          "Copying DNA is extremely accurate and still not perfect. A mutation is a typo. Most do nothing visible. Only a change in the cells that make eggs or sperm can reach a child. The typo is not trying to be helpful."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "DNA mostly stays put. A cell that wants to use a gene makes a temporary copy in a related molecule, RNA. RNA uses the base U instead of T. That disposable note travels out, and a molecular machine called a ribosome reads it.",
              "The ribosome reads three letters at a time. Three letters are a codon, and a codon matches one amino acid, or a signal that says stop. Amino acids are small molecules linked into a chain. The chain folds up. The fold is the protein. Shape is the whole job: a protein fits other molecules the way a key fits a lock, which is the same idea as molecules fitting by their shape and their bonds.",
              "Keratin in hair is a protein. So is hemoglobin, which carries oxygen in red blood cells. So are enzymes, which make chemical reactions go that would otherwise be hopelessly slow. Change one letter in the recipe and you might change one amino acid, and the fold might change, and the job might change. Or nothing much happens, because several codons mean the same amino acid. The code has synonyms."
            ]
          },
          {
            type: "aside",
            title: "One letter, one fold",
            text: "Sickle cell is a famous case. A single letter change in the hemoglobin gene swaps one amino acid. The protein can stick to itself, and red blood cells bend into crescents. We'll come back to why that version of the gene is common in some places. Tonight, the point is only that a letter can matter because a shape can matter."
          },
          {
            type: "prose",
            paragraphs: [
              "So a body is not DNA. A body is what cells build, mostly proteins, by reading DNA, plus everything the environment does on the way: food, temperature, practice, injury. The recipe is inherited. The finished cake is not. That distinction is going to do a lot of work later, when we ask what selection can and cannot see."
            ]
          }
        ],
        activity: {
          links: [
            {
              kind: "Look",
              title: "What are Proteins?",
              source: "Learn.Genetics · University of Utah",
              url: "https://learn.genetics.utah.edu/content/basics/proteins/",
              note: "Short and visual. This is the one to open tonight."
            },
            {
              kind: "Try",
              title: "Transcribe and Translate a Gene",
              source: "Learn.Genetics · University of Utah",
              url: "https://learn.genetics.utah.edu/content/basics/transcribe/",
              note: "A hands-on, better on a computer. Skip it on a phone if it misbehaves. The idea is already in the reading."
            }
          ]
        },
        talk: [
          "Why does the shape of a protein matter more than its 'name'?",
          "If two codons mean the same amino acid, what happens to the protein when a mutation swaps one for the other?"
        ],
        lights: "Cells read DNA in threes, build a chain of amino acids, and the chain folds into a protein whose shape does the work."
      },
      {
        id: "not-copies",
        title: "Why Siblings Aren't Copies",
        tease: "You get a shuffled half from each parent, not a blend and not a photocopy.",
        reviewLabel: "Yesterday",
        review: [
          "A gene is read into RNA, then into a protein. Proteins fold, and the fold does the job. A letter change sometimes changes the fold. The body you build is not what gets inherited — the recipe is."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "You do not get a blended average of your parents, the way two paints mix into one new color. For each gene, you get one copy from the egg and one copy from the sperm. Those copies can be different versions. The versions are called alleles. Both are real recipes, not a smoothie of the two.",
              "The cell that becomes an egg or a sperm does not get the full deck. It gets one shuffled half. The shuffle has two parts worth knowing, and you can skip the technical names. First, each pair of chromosomes lines up and you pass on one of the pair, at random. Second, the pairs can trade pieces before that happens. So the half that ends up in the egg is not a photocopy of half of the parent. It is a new mix.",
              "That is why siblings in the same family are not the same person twice. Same parents, different hands of cards. Identical twins are the exception: one egg, one sperm, then a split. Everyone else is a fresh deal."
            ]
          },
          {
            type: "ask",
            text: "Bacteria mostly copy themselves instead of shuffling with a partner. Where does their variation come from, if not from this card shuffle?"
          },
          {
            type: "prose",
            paragraphs: [
              "From mutation, mostly, and from occasionally picking up DNA other bacteria have left around. Both paths put inherited differences into the world. Sexual reproduction is a fast mixer. Mutation is the only way truly new letters appear. Evolution needs differences that can be inherited. Tonight's whole point is where a population gets those differences before anything is 'selected.'",
              "Some traits really do track one gene: a version you can follow through a family. Many traits, like height, come from lots of genes plus how you ate and slept while you were growing. Either way, you inherited genes. You did not inherit a memory, or a callus, or your parents' skills. Those have to be learned or built again."
            ]
          }
        ],
        activity: {
          links: [
            {
              kind: "Look",
              title: "What is Inheritance?",
              source: "Learn.Genetics · University of Utah",
              url: "https://learn.genetics.utah.edu/content/basics/inheritance/",
              note: "A short walk through how traits are passed down. Good on a phone."
            }
          ]
        },
        talk: [
          "Why aren't you a 50/50 paint mix of your parents?",
          "Name one thing a parent can pass on in DNA, and one thing a parent can only pass on by teaching."
        ],
        lights: "Children inherit a shuffled half of each parent's DNA, so families vary before selection ever starts."
      },
      {
        id: "more-babies",
        title: "More Babies Than Seats",
        tease: "Four plain facts, and nobody has to be in charge.",
        reviewLabel: "Yesterday",
        review: [
          "You inherit one gene copy from each parent, not a blend. Eggs and sperm get a shuffled half, so siblings differ. Mutations add brand-new letters. Differences you can inherit are now sitting in the population."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "An oak tree drops thousands of acorns. Not every acorn becomes a tree. A pair of robins can raise more chicks than will find a territory next spring. That is ordinary, not cruel, and it is the first fact. More young are born than will survive and have young of their own.",
              "Second fact: the young are not identical. You saw why last night, and the night before. Third: some of those differences are inherited. Fourth: the ones who do have young are not a perfect random sample. In a particular place, some differences make it a little more likely that an animal finds food, avoids being eaten, or raises babies. Those versions show up more often in the next generation.",
              "That sorting is natural selection. Nobody holds a clipboard. The environment does it, just by being the place where some versions leave more offspring than others. Charles Darwin and Alfred Russel Wallace both saw it in the 1800s. Wallace's letter is what finally pushed Darwin to publish."
            ]
          },
          {
            type: "aside",
            title: "A phrase that causes trouble",
            text: "'Survival of the fittest' does not mean the strongest, the smartest, or the one we admire. Fitness here means leaving more offspring in that environment. A thick coat is fit in a snowfield and unfit in a desert. A bright feather can be a disadvantage with hawks and an advantage with mates. That second kind is sexual selection, and it is still selection: it changes who has babies."
          },
          {
            type: "prose",
            paragraphs: [
              "Selection does not give an animal a new trait because the animal needs it. It only changes how common the inherited traits already are. If a useful version doesn't exist in the population, selection cannot conjure it. Mutation has to have supplied something to work with, or selection has nothing new to favor.",
              "And selection is not the only way frequencies change. In a very small group, plain luck can make a version common or wipe it out. That luck is called drift. We'll come back to it. Tonight, learn selection cleanly: inherited differences, too many young for the seats, and a place that is not neutral about the differences."
            ]
          }
        ],
        activity: {
          links: [
            {
              kind: "Watch",
              title: "Living Things Change",
              source: "Crash Course Kids",
              url: "https://www.youtube.com/watch?v=xDSFlRunlrU",
              note: "A short cartoon, a few minutes. The suggestions beside a YouTube video are not part of the lesson. The cartoon is the simple version. The careful version is the one you just read: populations change, because some individuals have more young."
            },
            {
              kind: "Read",
              title: "Natural selection",
              source: "Understanding Evolution · UC Berkeley",
              url: "https://evolution.berkeley.edu/evolution-101/mechanisms-the-processes-of-evolution/natural-selection/",
              note: "The museum page, if you want the same idea in their words."
            }
          ]
        },
        talk: [
          "A rabbit that runs faster than its siblings survives a fox. What else has to be true for the next generation of rabbits to be faster?",
          "Why is a polar bear's coat not 'fit' in the abstract — only fit somewhere?"
        ],
        lights: "Natural selection is inherited differences meeting a world where some versions leave more offspring than others."
      },
      {
        id: "beetle-patch",
        title: "The Beetle Patch",
        tease: "Be the bird. Then switch the ground and watch the winner change.",
        reviewLabel: "Yesterday",
        review: [
          "More young are born than can have young of their own. They differ, and some differences are inherited. The environment sorts them, with no one in charge. Fitness means more offspring there, not 'best' in general."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "Tonight is mostly a game, and the game is the lesson. You are a bird that eats beetles. Some beetles are green, some are brown. On green leaves, one color is easier to see. You get six pecks a season. Then the beetles you missed have the babies.",
              "Play at least four seasons before you switch anything. Notice which color is getting common, and that you never chose a favorite. You just tapped what you saw. A baby usually matches its parent. Once in a while a baby flips color. That flip is the mutation. Selection didn't invent it. Selection only pecks.",
              "Then switch the ground, from leaves to dark soil, and keep the same beetles. Don't reset. The easy ones to see should change. If you play a few more seasons, the common color should start to follow. That is the entire idea of natural selection in one patch of screen: variation, inheritance, too few seats, and an environment that can change its mind."
            ]
          },
          {
            type: "ask",
            text: "If every beetle were the same color, and no mutation ever flipped one, could selection change the population? What would it be missing?"
          }
        ],
        activity: {
          widget: "selection",
          links: [
            {
              kind: "Try",
              title: "Natural Selection",
              source: "PhET · University of Colorado",
              url: "https://phet.colorado.edu/en/simulations/natural-selection",
              note: "A bigger lab, for another time, with wolves and rabbits and a graph. It works in a browser on a tablet. Tonight's beetle patch is enough."
            }
          ]
        },
        talk: [
          "When you switched the ground, did the beetles change color one by one, or did the mix of the group change?",
          "What did the honey ring mean, and why does selection need those rare flips?"
        ],
        lights: "Selection changes which inherited version is common. Change the place, and you can change which version that is."
      },
      {
        id: "moths-mice-medicine",
        title: "Moths, Mice, and Medicine",
        tease: "Three true stories where the sorting was fast enough to watch.",
        reviewLabel: "Yesterday",
        review: [
          "On the beetle patch, the bird ate what stood out. Babies mostly matched their parents, with a rare flip. Switch the ground, and a different color became the safe one. The individuals didn't recolor themselves. The group changed."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "Peppered moths in England rest on tree trunks. In the early 1800s most were pale, speckled, and hard to see against lichen. A dark version was rare. Then coal soot killed the lichen and blackened the bark. Birds ate the moths they could see. Dark moths became the common ones. When the air was cleaned in the late 1900s, the trees lightened, and the pale moths came back. The moths did not decide to change. The ones that matched had more babies. Scientists tested this with real birds.",
              "Rock pocket mice live in the southwestern United States. On pale sand, most have pale fur. On old lava flows, some only about a thousand years old, most have dark fur. Owls and other hunters find the mice that don't match. A dark mouse on dark rock is not a better mouse. It is a harder mouse to see, there. Researchers found something even better: on different lava flows, the dark fur came from mutations in different genes. Same result, more than one molecular path. Selection did not care which typo it was.",
              "Bacteria and antibiotics are the story happening in hospitals. A person does not evolve resistance to a medicine. The bacterial population does. Most bacteria die. A rare one already had a variation that let it survive, often a protein that breaks the drug or pumps it out. That one divides. Soon the infection is made of its descendants. This is why a doctor says to finish the medicine: stopping early can leave the harder-to-kill bacteria still standing. The medicine didn't teach them a trick. It removed their neighbors."
            ]
          },
          {
            type: "ask",
            text: "In all three stories, name the sorter. Who or what was doing the pecking?"
          }
        ],
        activity: {
          links: [
            {
              kind: "Watch",
              title: "Natural Selection and the Rock Pocket Mouse",
              source: "HHMI BioInteractive",
              url: "https://www.biointeractive.org/classroom-resources/making-fittest-natural-selection-and-adaptation",
              note: "About ten minutes. It can be the rest of tonight. The mice are trapped unharmed."
            },
            {
              kind: "Watch",
              title: "The same film on YouTube",
              source: "HHMI BioInteractive",
              url: "https://www.youtube.com/watch?v=sjeSEngKGrg",
              note: "Use this if the HHMI page won't play. The sidebar suggestions are not part of the lesson."
            }
          ],
          quiz: [
            {
              q: "In the peppered moth story, what actually changed over the years?",
              choices: [
                "Each moth turned darker when the trees got sooty.",
                "Dark moths became more common, because birds ate fewer of them and they had more young.",
                "The birds decided to stop eating moths."
              ],
              answer: 1,
              why: "Individual moths don't recolor themselves to match. The mix of the population changes, because one inherited color leaves more offspring."
            },
            {
              q: "When an antibiotic stops working, what evolved?",
              choices: [
                "The sick person, who got used to the medicine.",
                "The bacterial population: rare survivors multiplied.",
                "The antibiotic, which got weaker sitting in the bottle."
              ],
              answer: 1,
              why: "The person is one body, and that body is not what selection is changing here. The bacteria are a population with inherited differences."
            }
          ]
        },
        talk: [
          "Why is 'the same dark fur, from different genes' such a good clue that selection, not one accident, is at work?",
          "What would you expect the peppered moths to do if the trees got sooty again?"
        ],
        lights: "Selection can be fast when the sorter is harsh and the generation time is short. It still only sorts differences that already exist."
      },
      {
        id: "darwins-puzzle",
        title: "Darwin's Puzzle",
        tease: "People already knew they could shape pigeons and cabbages. Darwin asked what a mindless sorter could do with more time.",
        reviewLabel: "Yesterday",
        review: [
          "Pale moths and dark moths traded places as the trees changed, because birds ate what they could see. Dark mice match dark lava, sometimes by different mutations. Antibiotics sort bacteria, not people."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "Charles Darwin was 22 when he boarded the HMS Beagle in 1831, as a naturalist's companion on a surveying voyage. He was gone five years. He collected everything: fossils, birds, plants, notes. In the Galápagos Islands, tortoises differed from island to island, and so did the birds. He did not instantly understand the finches. He had mixed up his labels, and an expert back in England, John Gould, told him the birds were a cluster of related species, not the mixed kinds Darwin had guessed. The idea grew after the voyage, not during a single heroic afternoon.",
              "Darwin already knew artificial selection, because everyone who bred animals did. People choose which pigeons, dogs, or sheep get to have babies, and the breed changes. Wild mustard, one weedy plant, was bred into cabbage, kale, broccoli, cauliflower, and Brussels sprouts by people saving seeds from the plants that exaggerated one part: leaf, flower, or stem. The variation was already there. People were just the sorter.",
              "His move was to drop the person. If pigeons change because a breeder keeps picking, populations can change because the world keeps picking, with no plan, given enough generations. He also argued something bigger: living things share ancestors. The differences are descended from earlier forms, not painted on from nothing. He called it descent with modification. He sat on the argument for years. In 1858 Wallace wrote him with nearly the same mechanism. They published short papers together. In 1859 Darwin's book, On the Origin of Species, laid the case out."
            ]
          },
          {
            type: "ask",
            text: "Broccoli and kale are the same species as wild mustard, shaped by farmers. What was the farmer doing that a drought, or a bird, can also do?"
          }
        ],
        activity: {
          links: [
            {
              kind: "Read",
              title: "Artificial selection",
              source: "Understanding Evolution · UC Berkeley",
              url: "https://evolution.berkeley.edu/evolution-101/mechanisms-the-processes-of-evolution/artificial-selection/",
              note: "Short. The pigeon and the cabbage, in their words."
            },
            {
              kind: "Watch",
              title: "The Origin of Species: The Beak of the Finch",
              source: "HHMI BioInteractive",
              url: "https://www.biointeractive.org/classroom-resources/origin-species-beak-finch",
              note: "Longer than a school night, closer to a quarter hour or more. Save it for a weekend. It is the real finches, measured year after year."
            }
          ]
        },
        talk: [
          "Why does it matter that Darwin didn't solve the finches in one glance on the beach?",
          "What is the difference between artificial selection and natural selection — and what is the same?"
        ],
        lights: "Darwin's idea: populations change because some inherited versions leave more offspring, and today's species descend from earlier ones."
      },
      {
        id: "how-old",
        title: "How Old Is Old?",
        tease: "A year for the whole planet. We show up after dinner on December 31.",
        reviewLabel: "Yesterday",
        review: [
          "Breeders change pigeons and cabbages by choosing who reproduces. Darwin argued that nature sorts too, with no breeder, and that living things share ancestors. The finch insight came after careful comparison, not in a flash on the beach."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "Selection needs generations. The obvious objection, in Darwin's time and sometimes now, is that there hasn't been enough time. There has. The Earth is about 4.5 billion years old. A billion is a thousand millions. If you counted one number a second, with no sleep, a million would take about eleven days. A billion would take about thirty-two years.",
              "How anyone knows is a chemistry question you are ready for. Some atomic nuclei are unstable. A uranium nucleus can spit out pieces and, through a chain of decays, become lead. It does this at a steady average rate that doesn't care about weather, earthquakes, or being buried. Measure how much uranium is left in a mineral and how much lead of the right kind has appeared, and you have a clock. The oldest Earth minerals, and meteorites left over from the solar system's birth, agree on that 4.5 billion years. Life's oldest solid clues are at least 3.5 billion years old, and maybe older. For most of that time, life was microbial.",
              "Fossils are mostly hard parts buried in sediment, where minerals slowly replace them, or the shape left behind. We will never have every page. Soft bodies often vanish. Erosion deletes chapters. We don't need every page to see the order. Tonight's widget is a calendar trick: the whole history of Earth squeezed into one year. Don't hunt for humans in January. We are not there."
            ]
          },
          {
            type: "aside",
            title: "Birds, while you're in December",
            text: "About 66 million years ago an asteroid ended the non-bird dinosaurs. Birds made it through. A bird is a dinosaur, the way a bat is a mammal. On the one-year calendar, that asteroid lands on December 26."
          }
        ],
        activity: {
          widget: "timeline",
          links: [
            {
              kind: "Try",
              title: "EarthViewer",
              source: "HHMI BioInteractive",
              url: "https://www.biointeractive.org/classroom-resources/earthviewer",
              note: "A big, beautiful deep-time globe. Better on a larger screen, another day. The calendar on this page is the one for tonight."
            },
            {
              kind: "Read",
              title: "How we know what happened when",
              source: "Understanding Evolution · UC Berkeley",
              url: "https://evolution.berkeley.edu/evolution-101/the-history-of-life-looking-at-the-patterns/how-we-know-what-happened-when/",
              note: "The short version of rocks, fossils, and clocks."
            }
          ]
        },
        talk: [
          "Why is a uranium nucleus a clock, when a puddle drying in the sun is not?",
          "On the one-year calendar, what was Earth doing for most of the year?"
        ],
        lights: "Earth is about 4.5 billion years old, life is most of that history, and animals — let alone humans — are the last days of December."
      },
      {
        id: "reading-rocks",
        title: "Reading the Rocks",
        tease: "Scientists predicted a fish with wrists, then went and found one.",
        reviewLabel: "Yesterday",
        review: [
          "Unstable nuclei are clocks, and they put Earth's age near 4.5 billion years. Life shows up early and stays microbial for a very long time. If history were a year, animals arrive in November, and we arrive in the last hour of December 31."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "Layers of sedimentary rock are usually older underneath and younger on top, unless something has clearly flipped them. Fossils in those layers are not scattered at random. In the oldest rocks that contain animals, you do not find rabbits, or birds, or flowers. You find simpler animal bodies. Higher up, new groups appear. The order repeats on different continents. That is already a prediction machine: a fossil rabbit in a rock that is truly a billion years old, with no mix-up, would wreck the story. We don't find that.",
              "The order also matches the family tree we get from bodies and from DNA. Things that share a more recent ancestor show up nearer each other in time. Missing pages are normal. A missing page is not a missing idea. You can see that a book is a novel even with a chapter torn out, if the chapters you have are in a consistent order.",
              "In the 1990s, Neil Shubin, Ted Daeschler, and their team wanted a fossil from the time when fish with fleshy fins were giving rise to vertebrates with wrists and necks. They knew how old the rocks needed to be, about 375 million years, and what kind of place: an ancient river or delta, where a shallow-water animal could be buried. They looked for rocks of that age they could actually get to. That search took them to Ellesmere Island, in the Canadian Arctic. In 2004 they found Tiktaalik — say tik-TAH-lik."
            ]
          },
          {
            type: "ask",
            text: "Why is 'we predicted the age of the rock, then found the animal' stronger evidence than 'we found a strange fossil and made up a story afterward'?"
          },
          {
            type: "prose",
            paragraphs: [
              "Tiktaalik has scales and fins, and also a neck, a flat head, and bones inside the fin that match an upper arm, a forearm, and a wrist. It is not 'the first land animal,' and it is not your grandmother frog. It may not even be a direct ancestor. It is a close cousin of that transition, which is what fossils usually are: relatives who show what the in-between could look like. Lobe-finned fishes are the group. Lungfish, living today, are nearer cousins to you than a goldfish is. You did not come from a salmon.",
              "The move onto land was not a single heroic fish deciding to walk. It was a population, in shallow water, where being able to prop yourself up and gulp air was useful. Later nights will stay with that idea: features change job before they look 'finished.'"
            ]
          }
        ],
        activity: {
          links: [
            {
              kind: "Watch",
              title: "When Fish First Breathed Air",
              source: "PBS Eons",
              url: "https://www.pbs.org/video/when-fish-first-breathed-air-vmmn0b/",
              note: "A short episode. Tiktaalik is the star. Fine to let the video carry the rest of tonight."
            },
            {
              kind: "Watch",
              title: "The same episode on YouTube",
              source: "PBS Eons",
              url: "https://www.youtube.com/watch?v=E1h4kgt2520",
              note: "If the PBS player won't start. Ignore the suggested videos afterward."
            }
          ]
        },
        talk: [
          "What would Tiktaalik have looked like if it had been a goldfish with legs glued on? What did it actually have?",
          "Why do scientists love a fossil that was predicted before it was found?"
        ],
        lights: "The rocks are in a consistent order, and Tiktaalik is a wristed fish from the exact age where a wristed fish had to be."
      },
      {
        id: "walking-whales",
        title: "Whales That Walked",
        tease: "If whales came from land mammals, early whales should have legs. They do.",
        reviewLabel: "Yesterday",
        review: [
          "Fossils are not random, and the order in the rocks matches the family tree. Tiktaalik was predicted from the age of the rocks: a fish with a neck and a wrist. It is a cousin of the transition to land, not a modern fish and not a frog."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "Whales and dolphins are mammals. They make milk, they are warm-blooded, and they breathe air. Their closest living relatives are hippos. That is a weird sentence until you hear the rest, and it came from comparing DNA, then lined up with bones.",
              "If whales descend from hoofed land mammals, then rocks of the right age should hold animals that are in between: whale-like ears or teeth, and still four legs. Those fossils turned up, mostly in Pakistan and India, in rocks about 50 million years old. Pakicetus — say pack-ih-SEE-tus — still looked like a long-legged animal that lived by fresh water. Ambulocetus — am-byoo-low-SEE-tus — means 'walking swimming whale.' It could do both, badly by later standards, and well enough for a river delta. Later whales have a blowhole, flippers, and tiny hip bones still sitting inside the body where legs used to attach. Those hip bones are not a decoration. They are leftovers of a skeleton that used to hold up weight.",
              "The video is five minutes, and it tells this better than a paragraph can, including a cat-sized relative called Indohyus with a thickened ear bone otherwise known from whales. Watch it together. The thing to listen for is not a list of names. It is the prediction: legs should be there, and legs are there."
            ]
          }
        ],
        activity: {
          links: [
            {
              kind: "Watch",
              title: "When Whales Walked",
              source: "PBS Eons · about 5 minutes",
              url: "https://www.pbs.org/video/when-whales-walked-jjfimk/",
              note: "This is the night's main event. Five minutes, closed captions, no gore."
            },
            {
              kind: "Watch",
              title: "The same episode on YouTube",
              source: "PBS Eons",
              url: "https://www.youtube.com/watch?v=_OSRKtT_9vw",
              note: "Same film, if PBS won't play. The channel's other suggestions can wait."
            }
          ]
        },
        talk: [
          "What did scientists expect to find, before they found walking whales, and why?",
          "Hippos are the closest living relatives of whales. Does that mean whales turned into hippos, or hippos turned into whales, or something else?"
        ],
        lights: "Whales are mammals whose ancestors walked. The fossils have legs, which is what common ancestry predicted."
      },
      {
        id: "same-bones",
        title: "Same Bones, Different Jobs",
        tease: "Your arm, a bat wing, a whale flipper, and a horse's leg are the same map.",
        reviewLabel: "Yesterday",
        review: [
          "Whales are mammals. DNA puts hippos nearest them. Fossils of early whales have four legs, including Ambulocetus, the walking swimming whale, and modern whales still have tiny hip bones where the legs attached."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "Hold your arm out. One long bone near the shoulder. Two bones in the forearm. A cluster of small wrist bones. Then fingers. A bat's wing has that same map, with the fingers stretched long and skin between them. A whale's flipper has it, shortened into a paddle. A horse's front leg has it too, though the horse stands on a single long digit and the side digits are reduced. The activity lights the map up.",
              "That match is a homology: a similarity because of shared inheritance, not because the job demands it. An engineer designing a flipper, a wing, and a hand from scratch would not be forced to use one bone, then two, then a pile of pebbles, then digits, every time. A wing can be built other ways. An insect wing is. Insect wings and bird wings both fly, but the structure is different. That kind of match, same job and different structure, is an analogy. Bird wings and bat wings are homologous as arms, and analogous as wings: the arm is inherited, the flying was invented twice.",
              "Some parts are leftovers with a smaller job, or almost none. Whale hips. The little muscles that give you goosebumps, which in a furry ancestor would have puffed the coat up for warmth or a threat. A tailbone. 'Leftover' does not always mean 'useless.' The appendix in humans seems to have an immune job, and it is still a reduced version of a larger pouch in leaf-eating relatives. History shows in the body as much as it shows in the rocks."
            ]
          },
          {
            type: "ask",
            text: "A shark and a dolphin both have a sleek shape and a fin on the back. Is that more likely a homology or an analogy? What would you need to know?"
          }
        ],
        activity: {
          widget: "homology",
          links: [
            {
              kind: "Read",
              title: "Homologies and analogies",
              source: "Understanding Evolution · UC Berkeley",
              url: "https://evolution.berkeley.edu/evolution-101/the-history-of-life-looking-at-the-patterns/homologies-and-analogies/",
              note: "Short. The same distinction, with pictures."
            }
          ]
        },
        talk: [
          "Why is a weird shared detail better evidence of ancestry than a shared job, like 'both of these fly'?",
          "Name a part of your body that looks like a hand-me-down."
        ],
        lights: "Homology is the same bones because of a shared ancestor. Analogy is the same job, solved more than once."
      },
      {
        id: "family-album",
        title: "The Family Album in Your Cells",
        tease: "The same code, the same typos, and a fused chromosome with the seam still showing.",
        reviewLabel: "Yesterday",
        review: [
          "Arms, bat wings, whale flippers, and horse legs share one bone, then two, then wrist bones, then digits. That map is inheritance. Insect wings fly without that map, so the flying is an analogy. Leftover parts are history you can touch."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "The genetic code is the same in you and in an oak tree. A codon that means a certain amino acid in your cells means that amino acid in a bacterium. That is exactly what you would expect if the code were inherited from one ancestor, and a surprise if life had been built from scratch many separate times. The chemistry didn't have to be this unified. It is.",
              "Line up comparable stretches of DNA and humans and chimpanzees match about 98 to 99 percent of the letters. The exact number depends on what you count, so don't treat 98.7 as a magic score. We match less with mice, less still with fish, less still with mushrooms. The order is the same order the fossils suggest. It is not a ladder from 'low' to 'high.' It is a set of nested groups: a group inside a group inside a group.",
              "Two details are especially hard to explain any other way. Other great apes have 24 pairs of chromosomes. Humans have 23. Our chromosome 2 looks like two ape chromosomes fused end to end. In the middle, where the join would be, there are leftover telomeres — the caps that normally only belong on the ends — and the scar of a second centromere. That is a seam. And some old viruses pasted themselves into the DNA of a sperm or egg cell, at essentially random addresses, and got stuck there forever. Humans and apes share some of those pasted-in viruses at the same address. A virus doesn't aim for the same spot in two species. A shared address means the paste happened once, in a shared ancestor."
            ]
          },
          {
            type: "ask",
            text: "If humans and chimps were built separately, why would both of them have the same broken virus sitting in the same place in the recipe?"
          }
        ],
        activity: {
          links: [
            {
              kind: "Look",
              title: "The 4 Types of DNA and Molecular Genealogy",
              source: "Learn.Genetics · University of Utah",
              url: "https://learn.genetics.utah.edu/content/basics/molgen/",
              note: "How DNA is used as a family record. Readable, and fine for a phone."
            },
            {
              kind: "Read",
              title: "Genetics evidence for human evolution",
              source: "Smithsonian Human Origins",
              url: "https://humanorigins.si.edu/evidence/genetics",
              note: "The Smithsonian's own page. Chromosomes, shared DNA, and what it does and doesn't say."
            }
          ]
        },
        talk: [
          "Why is a shared 'seam' or a shared virus scar better evidence than a feature that is useful to both species?",
          "Does matching DNA mean humans evolved from chimpanzees? What does it mean instead?"
        ],
        lights: "DNA is a family album: one shared code, nested similarities, a fused chromosome, and virus scars at the same addresses."
      },
      {
        id: "two-branches",
        title: "When One Branch Becomes Two",
        tease: "A species is a population that shares a gene pool. Split the pool, and two stories start.",
        reviewLabel: "Yesterday",
        review: [
          "The genetic code is shared across life. Comparable DNA puts chimps nearest us, then other apes, then the rest in the same order as the fossils. Chromosome 2 is two ape chromosomes fused, seam still visible. Shared virus scars sit at the same addresses."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "For animals, a useful way to say 'species' is: a group that actually shares a gene pool. They breed together, and their young can breed. The edges are fuzzy, and bacteria don't fit this definition well, because they trade DNA differently. Fuzzy edges don't make the idea useless. Day and night are fuzzy at dusk, and they are still real.",
              "Speciation is what happens when one pool becomes two. Often the split starts with geography. A river, a mountain, an ocean, an island. The two groups keep getting mutations. Selection can push them in different directions if the places differ. Drift nudges small groups too. If they meet again much later and don't successfully have young, you have two species. Sometimes they never meet again and just keep diverging. A new species is not one baby born a different kind of animal. It is a population story, and it is usually slow.",
              "Darwin's finches are the classic island version. Ancestors from the South American mainland reached the Galápagos, somewhere around two or three million years ago. Islands isolated groups. Beaks diverged with the food: deep beaks for hard seeds, slender beaks for insects. There are more than a dozen species now. Peter and Rosemary Grant measured medium ground finches on one tiny island for decades. In a drought, the plants that made small soft seeds died back, deep-beaked birds survived better, and the next generation's beaks were deeper on average. Wet years pushed back. Selection you can put on a graph, inside a human career.",
              "If the two groups start mixing again and having young, differences can wash back together. That mixing is gene flow. Speciation sticks when gene flow stays rare enough that the two stories no longer rejoin."
            ]
          },
          {
            type: "ask",
            text: "Two groups of birds look a little different, but they still have healthy chicks together whenever they meet. One species or two? What else would you want to know?"
          }
        ],
        activity: {
          links: [
            {
              kind: "Read",
              title: "Defining a species",
              source: "Understanding Evolution · UC Berkeley",
              url: "https://evolution.berkeley.edu/evolution-101/speciation/defining-a-species/",
              note: "Short and plain. The fuzzy edges are included, which is the honest part."
            },
            {
              kind: "Read",
              title: "Causes of speciation",
              source: "Understanding Evolution · UC Berkeley",
              url: "https://evolution.berkeley.edu/evolution-101/speciation/causes-of-speciation/",
              note: "Why a split stays split. Pairs well with the finch film from the Darwin night, if you saved it."
            }
          ]
        },
        talk: [
          "Why doesn't one animal give birth to a brand-new species?",
          "What would gene flow do to two groups that had started to become different?"
        ],
        lights: "A species split is a population that stops sharing genes long enough for two separate stories to take hold."
      },
      {
        id: "nobody-in-charge",
        title: "Nobody Is in Charge",
        tease: "Eyes, a ridiculous nerve, and a blind spot. Good enough to have babies beats perfect.",
        reviewLabel: "Yesterday",
        review: [
          "Speciation is a gene pool splitting, often after a geographic separation. Finches on the Galápagos did this, and the Grants watched beak size shift in a drought within a few generations. Gene flow can still remix two groups if they start having young together again."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "Selection has no sketchbook. It cannot save a half-finished feature because the finished one would be nice later. Every generation has to work. That sounds like a limit. It is also the answer to 'what good is half an eye?'",
              "A patch of cells that can tell light from dark is already useful: day versus night, shadow versus sun. A cup of those cells gives you direction. A smaller opening, like a pinhole, gives a dim picture. A lens brightens and sharpens it. Each of those stages helps, and animals alive today still use the earlier stages. Eyes evolved more than once. A vertebrate eye and an octopus eye both have a lens, and they were not inherited from a lens-eyed ancestor. The octopus version is wired more 'sensibly.' Ours has a blind spot, because the nerve fibers run in front of the light sensors and have to dive through them to get out. History, not a clean blueprint.",
              "There is a nerve to your voice box that, in a fish, takes a short loop past the heart. In you it still loops down into the chest and back up. In a giraffe that detour is several meters, down the neck and back. Nobody designed a giraffe that way. The route was inherited from ancestors who barely had a neck, and lengthening the neck didn't reroute the wire. Selection doesn't get to start over. It edits."
            ]
          },
          {
            type: "ask",
            text: "If a mutation made a slightly better eye, but the animal died with no young, does the population get that eye? Who has to survive the edit?"
          },
          {
            type: "prose",
            paragraphs: [
              "This is also why bodies are full of tradeoffs. Upright walking frees the hands and makes childbirth harder and backs achy. A peacock's tail is a handicap that works as an advertisement. 'Good enough to have babies in that place' beats 'perfect' every time, because perfect was never one of the options on the table. The options were whatever mutations and shuffles happened to produce, in bodies that still had to live.",
              "Try the blind spot before the lamp goes out. It is a small, friendly proof that you are carrying history in your head."
            ]
          }
        ],
        activity: {
          widget: "blindspot",
          links: [
            {
              kind: "Read",
              title: "Misconceptions about natural selection",
              source: "Understanding Evolution · UC Berkeley",
              url: "https://evolution.berkeley.edu/evolution-101/mechanisms-the-processes-of-evolution/misconceptions-about-natural-selection/",
              note: "The page to open if someone says evolution has a goal, or that it makes organisms 'better' in general."
            }
          ]
        },
        talk: [
          "Why is 'what good is half an eye?' not the problem it sounds like?",
          "The giraffe nerve is a bad route. Why doesn't selection just fix it?"
        ],
        lights: "Evolution edits what already exists. It has no plan, and good enough to reproduce beats perfect."
      },
      {
        id: "family-tree",
        title: "The Whole Family Tree",
        tease: "Three great branches. You are on one late twig, with bacterial roommates inside your cells.",
        reviewLabel: "Yesterday",
        review: [
          "Selection has no goal and no sketch. Eyes can evolve in useful stages, and they did more than once. Your blind spot, and the nerve that loops through a giraffe's neck, are history that was never redesigned from scratch."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "Every living thing we've been able to put on a family tree falls on three great branches: Bacteria, Archaea, and Eukarya. You are a eukaryote. Your cells have a nucleus. Archaea — ar-KEE-uh — are not a kind of bacteria. They are their own branch, and eukaryotes are closer relatives of archaea than of bacteria.",
              "Inside your cells are mitochondria, the little compartments that handle energy. They have their own DNA, a circle, more like a bacterium's than like yours. The best reading of the evidence is that they were free-living bacteria, taken in by an ancestor of eukaryotes and never digested. Plants later did it again with a bacterium that could photosynthesize. That one became the chloroplast. You are not a single lineage in the way a diagram sometimes pretends. You are a cell with ancient roommates.",
              "The last universal common ancestor, LUCA, is the most recent organism that all current life descends from. LUCA was already a cell, with DNA and ribosomes and the shared code. LUCA was not the first life. Earlier cells and earlier chemistry are mostly invisible to us. After LUCA, the tree is microbial for an enormously long time. Animals are a late twig inside eukaryotes. Fungi are closer to animals than plants are. A mushroom is more your cousin than a daisy is.",
              "Open the tree and ask it where you are. Notice what the picture refuses to be. It is not a ladder with bacteria at the bottom and a human at the top. Every branch tip has been evolving for the same amount of time since the split. Bacteria are not unfinished people. They are extraordinarily good at being bacteria."
            ]
          }
        ],
        activity: {
          widget: "tree",
          links: [
            {
              kind: "Read",
              title: "Trees, not ladders",
              source: "Understanding Evolution · UC Berkeley",
              url: "https://evolution.berkeley.edu/evolution-101/the-history-of-life-looking-at-the-patterns/trees-not-ladders/",
              note: "The single most useful page if the 'march of progress' picture is stuck in your head."
            },
            {
              kind: "Read",
              title: "The family tree",
              source: "Understanding Evolution · UC Berkeley",
              url: "https://evolution.berkeley.edu/evolution-101/the-history-of-life-looking-at-the-patterns/the-family-tree/",
              note: "A companion page: how biologists draw the relationships."
            }
          ]
        },
        talk: [
          "Why is a mushroom a closer cousin to you than a daisy is? What would 'closer' mean on a tree?",
          "Was LUCA the first living thing? What was LUCA, then?"
        ],
        lights: "Life is a tree with three great branches. You are a late eukaryotic twig, and your cells still carry bacterial roommates."
      },
      {
        id: "human-twig",
        title: "The Human Twig",
        tease: "We are apes. Chimps are cousins, not grandparents. Several human relatives were alive at once.",
        reviewLabel: "Yesterday",
        review: [
          "Bacteria, Archaea, and Eukarya are the three great branches. Mitochondria were bacteria. LUCA was already a real cell, not the first spark. The tree is not a ladder, and a mushroom is closer to you than a daisy is."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "Humans are apes. Our closest living relatives are chimpanzees and bonobos. We did not evolve from them. The shared ancestor lived something like six to seven million years ago, and both lines have been changing ever since. A chimp is a modern animal, exactly as modern as you are. The picture of an ape slowly standing up until it becomes a man in a suit is a cartoon of a ladder. The evidence is a bush.",
              "Walking on two legs came before the big brain. Australopithecus afarensis — aw-stral-oh-PITH-uh-kus — includes the fossil nicknamed Lucy, about 3.2 million years old, from Ethiopia. She walked upright. Her brain was not much bigger than an ape's of her size. Our species, Homo sapiens, is at least about 300,000 years old, from fossils in Africa, including finds at Jebel Irhoud in Morocco. We arose in Africa. We are one species.",
              "For a long time we were not the only human branch. Neanderthals lived in Europe and western Asia. Denisovans lived in Asia. We overlapped them in time. Many people whose ancestors lived outside Africa carry about one to two percent Neanderthal DNA, a souvenir of meeting, not a rank. People whose recent ancestors all lived in sub-Saharan Africa mostly do not. Nobody is more human because of that souvenir.",
              "Skin color is melanin, a pigment, in different amounts. More melanin protects folate, a vitamin, from strong sun. Less melanin lets more ultraviolet through, which helps make vitamin D where sunlight is weak. It is a local adaptation, it is recent on the calendar you saw, and it is a gradient, not a set of separate kinds. It is not a ranking. Recent evolution in our species also includes lactase persistence — the ability to digest milk sugar as an adult — in several places where people kept dairy animals, and changes that help with thin air in some high-altitude populations. Culture is powerful, and culture is not the same thing as a gene changing. We did not stop evolving because we invented tools. Tools change which traits matter. They don't repeal inheritance."
            ]
          },
          {
            type: "ask",
            text: "If chimps and humans are both modern, what is wrong with saying 'we came from chimps, so chimps are less evolved'?"
          }
        ],
        activity: {
          links: [
            {
              kind: "Read",
              title: "Introduction to Human Evolution",
              source: "Smithsonian Human Origins",
              url: "https://humanorigins.si.edu/education/introduction-human-evolution",
              note: "The right page to leave open. Written for learners, and it does not turn people into a ladder."
            },
            {
              kind: "Look",
              title: "Human family tree",
              source: "Smithsonian Human Origins",
              url: "https://humanorigins.si.edu/evidence/human-family-tree",
              note: "Several relatives at once, which is the picture to remember. Tap around if the lamp is still on."
            }
          ]
        },
        talk: [
          "Which came first in our lineage, upright walking or a human-sized brain? Why does the order surprise people?",
          "Why is skin color a sunlight adaptation, not a way of sorting people into kinds?"
        ],
        lights: "We are one African species of ape. Cousins, not grandchildren, of chimps — and not the goal of the tree."
      },
      {
        id: "happening-now",
        title: "It's Still Happening",
        tease: "Beaks, bug mouths, and bacteria. Scientists argue about the details and not about the trunk of the tree.",
        reviewLabel: "Yesterday",
        review: [
          "Humans are apes, cousins of chimps, not their descendants. Upright walking came before big brains. Several human relatives lived at the same time. Skin color tracks sunlight. We are still a single species, and still evolving."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "You already met the Grants' finches: a drought, harder seeds, deeper beaks in the next generation, and a swing back when the weather changed. That is evolution measured in millimeters, on live birds, by people with notebooks. It is not a story about the distant past only.",
              "Soapberry bugs in the southern United States feed by piercing fruit with a long beak. When a new tree with flatter fruit pods became common, populations that switched to it evolved shorter beaks, on the order of decades. Same insects, a new food, a heritable beak length that shifted. Nobody was breeding them on purpose.",
              "Antibiotic resistance is the example with consequences. So is pesticide resistance in insects. The pattern is the beetle patch: a strong sorter, a short generation time, and a rare inherited difference that was already there or appeared by mutation. Evolution is not something the planet used to do.",
              "Biologists do argue, and the arguments are real. How often is change slow, and how often is it a burst? How big a role does drift play, especially in small populations? Where exactly do you draw a species line in a fossil? Those fights happen on top of a trunk that is not in play: populations change, selection works, the Earth is old, and living things share ancestors. The trunk is held up by fossils, by geography, by anatomy, by the chromosome seam, by the virus scars, and by experiments you can watch. Evidence from independent directions agreeing is what 'settled' means. It does not mean 'we are done learning.'"
            ]
          },
          {
            type: "ask",
            text: "Which of tonight's examples could you, in principle, watch during one human lifetime? Which would you need the rocks for?"
          }
        ],
        activity: {
          links: [
            {
              kind: "Read",
              title: "Natural selection at work",
              source: "Understanding Evolution · UC Berkeley",
              url: "https://evolution.berkeley.edu/evolution-101/mechanisms-the-processes-of-evolution/natural-selection-at-work/",
              note: "Cases of selection you don't have to imagine. A good follow-up to the finch story."
            },
            {
              kind: "Watch",
              title: "Evolving Switches, Evolving Bodies",
              source: "HHMI BioInteractive",
              url: "https://www.biointeractive.org/classroom-resources/making-fittest-evolving-switches-evolving-bodies",
              note: "Stickleback fish, and how a switch in DNA can change a body. Longer than tonight. Save it."
            }
          ]
        },
        talk: [
          "What is the difference between 'scientists disagree' and 'anything goes'?",
          "Why are bacteria a faster place to watch evolution than elephants?"
        ],
        lights: "Evolution is measurable now. The open arguments are about how the details work, not about whether the family tree is real."
      },
      {
        id: "how-we-know",
        title: "How We Know",
        tease: "A theory is not a guess. Here is what would have wrecked the idea, and what we found instead.",
        reviewLabel: "Yesterday",
        review: [
          "Finch beaks, soapberry-bug mouths, and antibiotic resistance are evolution you can time with a watch or a notebook. Biologists argue about pace and about drift. They are not arguing about whether populations change or whether life shares ancestors."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "In everyday talk, 'theory' means a hunch. In science, a hypothesis is the hunch: an idea you can test. A theory is a big explanation that has survived tests and ties many facts together. Gravity is a theory. You still don't jump off a roof. Evolutionary theory is in that category. Calling it 'just a theory' is a mix-up about the word, not a discovery about the evidence.",
              "Good theories say what would embarrass them. A fossil rabbit in rock that is truly a billion years old, sealed in place, with no contamination and no collapsed cave, would be a disaster for the timeline. We don't find that. A body plan that shares no nested similarities with anything, in anatomy or in DNA, would sit outside the tree. We don't find that either. What we find, over and over, is agreement: rocks, bones, geography, embryos studied carefully (not the old fake drawings of embryos that textbooks used to copy), and molecules, all telling compatible stories.",
              "Here is the month in one breath. DNA is a copiable molecule, and the copies have typos. Parents pass on a shuffle, not a blend and not their muscles. More young are born than will have young. The world sorts the inherited differences, with no plan. Over deep time, sorted populations split, and the splits are the tree. We are one late twig, and we can check the work.",
              "The point of these nights was not to finish biology. It was to see that the living world has a history, and that 'how do we know?' is a question with actual answers. You are allowed to keep asking it."
            ]
          },
          {
            type: "ask",
            text: "What would count as a real surprise — something that should make a scientist worried — rather than just a fact we haven't learned yet?"
          }
        ],
        activity: {
          quiz: [
            {
              q: "A person lifts weights for years and builds big muscles. Their baby is born with those muscles. What's the careful answer?",
              choices: [
                "True. The body passes on what it practiced.",
                "False. Muscles built in a lifetime are not written into the DNA that eggs and sperm carry.",
                "True, but only if the weightlifter is the mother."
              ],
              answer: 1,
              why: "Changes to ordinary body cells are not the recipe passed on. Evolution is about which inherited differences leave more offspring."
            },
            {
              q: "In this course, what does fitness mean?",
              choices: [
                "Whoever is strongest or smartest.",
                "Whoever leaves more offspring in that environment.",
                "Whoever lives the longest, even with no young."
              ],
              answer: 1,
              why: "A trait is fit only relative to a place and a way of life. It is about offspring, not a trophy."
            },
            {
              q: "Humans evolved from chimpanzees.",
              choices: [
                "Yes. Chimps are our grandparents.",
                "No. Chimps are cousins. We share an ancestor that was neither of us.",
                "Yes, but it was gorillas."
              ],
              answer: 1,
              why: "Both lines kept changing after the split. A living chimp is not an ancestor, and not a lower step."
            },
            {
              q: "A fossil rabbit in rock that is truly a billion years old, with no mix-up, would be a problem because…",
              choices: [
                "Rabbits are unlucky.",
                "The rest of the evidence says rabbits appear very late, after a long history of other animals.",
                "Rabbits cannot become fossils."
              ],
              answer: 1,
              why: "The timeline makes predictions. A genuine billion-year-old rabbit would contradict a huge, consistent record."
            },
            {
              q: "Are humans more evolved than bacteria?",
              choices: [
                "Yes. Humans are the goal of evolution.",
                "No. Bacteria are superb at being bacteria, and there is no finish line.",
                "Yes, because simple things stop evolving."
              ],
              answer: 1,
              why: "Every branch has been changing since it split. Complicated does not mean more evolved."
            },
            {
              q: "Are birds dinosaurs?",
              choices: [
                "No. Dinosaurs all died, and birds are a separate invention.",
                "Yes. Birds are the dinosaur branch that survived.",
                "Only in cartoons."
              ],
              answer: 1,
              why: "The non-bird dinosaurs ended 66 million years ago. Birds came through. They are dinosaurs the way bats are mammals."
            }
          ],
          links: [
            {
              kind: "Read",
              title: "Misconceptions about evolution",
              source: "Understanding Evolution · UC Berkeley",
              url: "https://evolution.berkeley.edu/teach-evolution/misconceptions-about-evolution/",
              note: "The best one-stop page when a phrase like 'just a theory' or 'it's only a ladder' shows up later."
            },
            {
              kind: "Read",
              title: "Evolution 101",
              source: "Understanding Evolution · UC Berkeley",
              url: "https://evolution.berkeley.edu/evolution-101/",
              note: "The front door, if you want to wander past this course on your own."
            }
          ]
        },
        talk: [
          "Which night do you want to remember, and which one do you still not buy?",
          "If there were a next course, what should it be: oceans, stars, brains, or something else?"
        ],
        lights: "We know because independent lines of evidence agree, and because the idea keeps surviving tests that could have sunk it."
      }
    ]
  });
})();
