/* Evolution course. */
(function () {
  window.SCIENCE_COURSES = window.SCIENCE_COURSES || [];
  window.SCIENCE_COURSES.push({
    id: "evolution",
    title: "Evolution",
    added: "2026-11-08",
    blurb: "How living things change over time. The course covers DNA and inheritance, natural selection, the evidence from fossils and genetics, and human evolution.",
    lessons: [
      {
        id: "dna",
        title: "Cells and DNA",
        tease: "What DNA is made of and how cells copy it.",
        reviewLabel: "Background",
        review: [
          "Atoms are made of protons, neutrons, and electrons. Atoms bond to each other by sharing or transferring electrons. A molecule is two or more atoms held together by bonds. DNA is a very large molecule."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "All living things are made of the same kinds of atoms as rocks and water, mostly carbon, hydrogen, oxygen, and nitrogen, with smaller amounts of phosphorus and sulfur. What makes something alive is how those atoms are arranged into molecules and what the molecules do together.",
              "Living things are made of cells. The human body has about 30 trillion cells. A bacterium is a single cell. Each cell is enclosed by a membrane and filled with water and many kinds of molecules. In animals, plants, and fungi, the cell has a nucleus that holds most of the DNA. Bacteria have DNA but no nucleus."
            ]
          },
          { type: "h", text: "Structure of DNA" },
          {
            type: "prose",
            paragraphs: [
              "DNA stands for deoxyribonucleic acid. It is a long molecule built from repeating units called nucleotides. Each nucleotide has three parts: a sugar, a phosphate group, and a base. The sugars and phosphates link into a chain called the backbone. The links in the backbone are strong covalent bonds.",
              "There are four bases: adenine (A), thymine (T), cytosine (C), and guanine (G). DNA has two strands that run side by side and twist into a double helix. The bases of one strand face the bases of the other strand and are joined by hydrogen bonds. Adenine pairs only with thymine, using two hydrogen bonds. Cytosine pairs only with guanine, using three hydrogen bonds. Other combinations do not fit.",
              "Because of this pairing, each strand determines the other. If one strand reads A-C-T-G, the other strand reads T-G-A-C. Hydrogen bonds are much weaker than covalent bonds, so the two strands can be pulled apart without breaking either backbone."
            ]
          },
          { type: "h", text: "Copying DNA" },
          {
            type: "prose",
            paragraphs: [
              "A cell copies its DNA before it divides. Enzymes separate the two strands. Another enzyme, DNA polymerase, moves along each old strand and adds the matching base at each position to build a new strand. The result is two DNA molecules, and each one has one old strand and one new strand.",
              "The order of the bases along a strand is the information in DNA. The human genome, which is the complete set of DNA in a cell, is about 3 billion base pairs long. All cellular life uses DNA to store its genetic information. Some viruses use RNA, a related molecule. Biologists disagree about whether viruses count as living things, because a virus can only reproduce inside a host cell."
            ]
          }
        ],
        activity: {
          widget: "pairs",
          links: [
            {
              kind: "Look",
              title: "What are DNA and Genes?",
              source: "Learn.Genetics · University of Utah",
              url: "https://learn.genetics.utah.edu/content/basics/dna/",
              note: "An overview of DNA, genes, and chromosomes."
            },
            {
              kind: "Try",
              title: "Build a DNA Molecule",
              source: "Learn.Genetics · University of Utah",
              url: "https://learn.genetics.utah.edu/content/basics/builddna/",
              note: "An interactive that builds a DNA molecule base by base. It works best on a computer."
            }
          ]
        },
        talk: [
          "Why does it matter that the bonds between the two strands are weaker than the bonds in the backbone?",
          "If one strand of DNA reads C-C-A-T, what does the other strand read?"
        ],
        summary: "DNA is a double-stranded molecule. A pairs with T and C pairs with G, so each strand can be used as a template for a new strand."
      },
      {
        id: "genes-and-proteins",
        title: "Genes and proteins",
        tease: "How a gene is read to build a protein.",
        review: [
          "DNA has two strands joined by hydrogen bonds between the bases. A pairs with T and C pairs with G. The order of the bases is the information, and cells copy DNA by using each strand as a template."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "A gene is a section of DNA that contains the instructions for making one molecule, usually a protein. Humans have about 20,000 genes that code for proteins. Together they make up only about 1 to 2 percent of the human genome. Much of the remaining DNA helps control when genes are active, and some of it has no known function.",
              "Proteins do most of the work in a cell. Hemoglobin carries oxygen in red blood cells. Keratin makes up hair and nails. Collagen gives strength to skin and bones. Enzymes speed up chemical reactions. Amylase, an enzyme in saliva, breaks starch into sugars."
            ]
          },
          { type: "h", text: "From gene to protein" },
          {
            type: "prose",
            paragraphs: [
              "A cell makes a protein in two steps. In the first step, called transcription, the gene is copied into a molecule of RNA. RNA is similar to DNA, but it has a single strand and uses uracil (U) in place of thymine. In the second step, called translation, a ribosome reads the RNA and builds the protein.",
              "The ribosome reads the RNA three bases at a time. Each group of three bases is called a codon. Most codons specify one of 20 amino acids, and three codons mean stop. The ribosome links the amino acids into a chain in the order the codons specify. There are 64 possible codons and only 20 amino acids, so most amino acids are specified by more than one codon.",
              "The chain of amino acids folds into a three-dimensional shape that depends on its sequence. The shape matters because proteins work by fitting to other molecules. An enzyme, for example, has a shape that matches the molecule it acts on. A different sequence can produce a different shape, and a different shape can change or stop the protein's function."
            ]
          },
          {
            type: "aside",
            title: "Sickle cell disease",
            text: "Sickle cell disease is caused by a change in a single base in the gene for one part of hemoglobin. The change replaces one amino acid, glutamic acid, with another, valine. When oxygen is low, hemoglobin molecules that contain valine stick together and bend red blood cells into a curved shape. These cells can block small blood vessels. One base change in DNA changes one amino acid, and that changes how the protein behaves."
          },
          {
            type: "prose",
            paragraphs: [
              "Genes do not determine everything about a body. The environment also matters. Nutrition affects how tall a person grows, and exercise affects muscle size. Only the genes are inherited from parents."
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
              note: "An overview of what proteins are and what they do."
            },
            {
              kind: "Try",
              title: "Transcribe and Translate a Gene",
              source: "Learn.Genetics · University of Utah",
              url: "https://learn.genetics.utah.edu/content/basics/transcribe/",
              note: "An interactive that walks through transcription and translation. It works best on a computer."
            }
          ]
        },
        talk: [
          "Why can a change in one base change what a protein does?",
          "Several codons can specify the same amino acid. What happens to the protein if a mutation changes a codon into another codon for the same amino acid?"
        ],
        summary: "A gene is copied into RNA, and the RNA is read three bases at a time to build a chain of amino acids. The chain folds into a protein, and the protein's shape determines what it does."
      },
      {
        id: "mutations",
        title: "Mutations",
        tease: "How the DNA sequence changes and which changes are inherited.",
        review: [
          "A gene is a section of DNA that is copied into RNA and used to build a protein. The RNA is read in codons, and the chain of amino acids folds into a protein. The shape of the protein determines what it does."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "A mutation is a change in the DNA sequence. Most mutations come from errors made while copying DNA. DNA polymerase adds a wrong base about once in every 100,000 bases, but other enzymes check the new strand and repair most of the mistakes. After this proofreading, about one error in every 100 million bases remains. Mutations can also be caused by radiation, such as ultraviolet light and X-rays, and by some chemicals.",
              "A newborn human has about 70 mutations that were not present in either parent. That is out of about 6 billion bases, counting the two copies of the genome."
            ]
          },
          { type: "h", text: "Kinds of mutations" },
          {
            type: "prose",
            paragraphs: [
              "A substitution replaces one base with another. An insertion adds one or more bases, and a deletion removes one or more. An insertion or deletion that is not a multiple of three shifts the reading of every codon after it, which usually stops the protein from working.",
              "Most mutations have no noticeable effect. Many occur in DNA that has no important function, and some change a codon into another codon for the same amino acid. Some mutations are harmful, for example by stopping a protein from working. A few are helpful in a particular environment. A mutation that lets adults digest the milk sugar lactose is common in people whose ancestors kept dairy animals.",
              "Mutations are random with respect to what an organism needs. A mutation does not happen because it would be useful. Whether a mutation is harmful, helpful, or neutral depends on the environment the organism lives in."
            ]
          },
          { type: "h", text: "Which mutations are inherited" },
          {
            type: "prose",
            paragraphs: [
              "Only mutations in the cells that make eggs and sperm can be passed on to children. These are called germline mutations. A mutation in any other body cell is called a somatic mutation and affects only that person. A mutation in a skin cell caused by sunlight is not passed on. Changes made to the body during life, such as bigger muscles from exercise or a scar from an injury, are not passed on either.",
              "Mutation is the source of new alleles, which are different versions of a gene. All of the variation that natural selection acts on first came from mutations."
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
              note: "A short article on how mutations happen and what they do."
            }
          ]
        },
        talk: [
          "Why is a mutation in a skin cell not passed on to a child?",
          "A mutation can be harmful in one environment and helpful in another. How could that happen?"
        ],
        summary: "A mutation is a change in the DNA sequence. Mutations are random with respect to what an organism needs, and only mutations in egg and sperm cells are inherited."
      },
      {
        id: "inheritance",
        title: "Inheritance",
        tease: "How genes pass from parents to children and why siblings differ.",
        review: [
          "A mutation is a change in the DNA sequence, usually caused by a copying error. Most mutations have no effect, some are harmful, and a few are helpful. Only mutations in egg and sperm cells are passed on to children."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "Humans have 23 pairs of chromosomes, which is 46 in total. A person receives one chromosome of each pair from the mother and one from the father. For most genes a person has two copies, one from each parent. The two copies can be different versions, called alleles.",
              "Offspring do not receive a blend of their parents' traits. Alleles are passed on whole. Gregor Mendel, an Austrian monk, worked this out in the 1860s by crossing pea plants. When he crossed purple-flowered plants with white-flowered plants, all of the offspring had purple flowers. When he crossed those offspring with each other, about one in four of the next generation had white flowers. The white-flower allele had not disappeared. It was present in the purple-flowered plants and was passed on. An allele that shows up when only one copy is present is called dominant. An allele that is hidden when a dominant allele is present is called recessive."
            ]
          },
          { type: "h", text: "Making eggs and sperm" },
          {
            type: "prose",
            paragraphs: [
              "Eggs and sperm are made by a kind of cell division called meiosis. Each egg or sperm receives one chromosome from each of the 23 pairs, chosen at random. That alone allows about 8 million different combinations from one person. In addition, before the chromosomes separate, the two chromosomes in each pair swap sections. This is called crossing over. As a result, the chromosomes a person passes on are mixtures of the chromosomes that person received from their own parents.",
              "Because of this shuffling, siblings with the same parents receive different combinations of alleles. Only identical twins have the same DNA. Identical twins form when one fertilized egg splits into two."
            ]
          },
          { type: "h", text: "What is and is not inherited" },
          {
            type: "prose",
            paragraphs: [
              "Most traits depend on many genes plus the environment. Height is influenced by hundreds of genes, and also by nutrition and health during childhood. Genes are inherited. Skills, knowledge, and changes the body undergoes during life, such as a callus or a scar, are not.",
              "Bacteria reproduce by dividing in two, so offspring are nearly identical to the parent cell. Their variation comes mainly from mutation. Bacteria can also take up DNA from other bacteria or from their surroundings.",
              "Mutation creates new alleles. Sexual reproduction shuffles existing alleles into new combinations. Together they produce the variation found in a population."
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
              note: "An overview of how traits are passed from parents to children."
            }
          ]
        },
        talk: [
          "Two purple-flowered pea plants can have a white-flowered offspring. How is that possible?",
          "Name one thing a parent passes on through DNA and one thing a parent can pass on only by teaching."
        ],
        summary: "Children inherit one allele of each gene from each parent, and the chromosomes are shuffled when eggs and sperm are made. Siblings differ for that reason."
      },
      {
        id: "natural-selection",
        title: "Natural selection",
        tease: "How inherited traits become more or less common in a population.",
        review: [
          "Mutations produce new alleles, and sexual reproduction combines alleles in new ways. Offspring differ from their parents and from each other. Genes are inherited, but changes to the body during life are not."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "Natural selection is the process by which inherited traits that help organisms survive and reproduce become more common in a population over generations. It follows from four facts.",
              "First, organisms produce more offspring than can survive. An oak tree drops thousands of acorns in a year, and a female cod can release millions of eggs. Most of the offspring die before they reproduce. Second, the individuals in a population differ from each other in size, color, speed, resistance to disease, and many other traits. Third, some of those differences are inherited. Fourth, some inherited differences make an individual more likely to survive and reproduce in its environment.",
              "When all four facts hold, the next generation contains a larger share of the helpful traits than the previous generation did. Over many generations the population changes. No one chooses which individuals survive. The environment does, through predators, food supply, climate, and disease."
            ]
          },
          { type: "h", text: "Fitness" },
          {
            type: "prose",
            paragraphs: [
              "In biology, fitness is the number of offspring an individual leaves that survive to reproduce, compared with other individuals in the same population. Fitness is not the same as strength or health. A thick coat of fur gives high fitness in a cold place and low fitness in a hot place. A trait is helpful only in relation to a particular environment.",
              "'Survival of the fittest' is a short way to describe this, but reproduction is what counts. An animal that lives a long time but leaves no offspring has a fitness of zero. Some traits improve reproduction without helping survival. A male peacock's long tail makes him easier for predators to catch, but peahens prefer to mate with males that have larger tails. This is called sexual selection."
            ]
          },
          { type: "h", text: "What natural selection does not do" },
          {
            type: "prose",
            paragraphs: [
              "Natural selection acts only on variation that already exists. It does not give organisms the traits they need. If no individual in a population has a helpful trait, selection cannot produce it, and new variation comes from mutation. Individual organisms do not change during their lives because of selection. Populations change over generations because individuals with helpful traits leave more offspring.",
              "Natural selection is not the only cause of change in a population. In a small population, chance alone can make an allele more common or make it disappear. This is called genetic drift."
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
              note: "A short animated introduction to how populations change."
            },
            {
              kind: "Read",
              title: "Natural selection",
              source: "Understanding Evolution · UC Berkeley",
              url: "https://evolution.berkeley.edu/evolution-101/mechanisms-the-processes-of-evolution/natural-selection/",
              note: "A more detailed explanation of the same ideas."
            }
          ]
        },
        talk: [
          "A rabbit that runs faster than its siblings escapes a fox. What else has to be true for the next generation of rabbits to run faster on average?",
          "Why is a polar bear's thick fur an advantage in the Arctic but not in a desert?"
        ],
        summary: "Natural selection happens when individuals differ, some differences are inherited, and some inherited differences lead to more offspring. The traits that lead to more offspring become more common."
      },
      {
        id: "selection-simulation",
        title: "Natural selection simulation",
        tease: "A beetle population simulation that shows selection and a changing habitat.",
        review: [
          "Natural selection needs four things. More offspring are born than survive, individuals differ, some differences are inherited, and some differences lead to more offspring. Fitness means the number of offspring that survive to reproduce in a particular environment."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "The simulation below models a beetle population. It starts with 16 beetles, 8 green and 8 brown, on green leaves. Brown beetles are easier to see on green leaves. You play the bird that eats them.",
              "Click on a beetle to eat it. You can eat six beetles each season. Then press the button to let the survivors reproduce. Each baby has the same color as its parent, except that about one baby in twelve has the other color because of a mutation. A ring around a beetle marks a baby with a new color. Play at least four seasons and watch how many green and brown beetles there are.",
              "Next, switch the habitat to dark soil without restarting, and play four more seasons. Green beetles are now easier to see and brown beetles are harder to see."
            ]
          },
          { type: "h", text: "What the simulation shows" },
          {
            type: "prose",
            paragraphs: [
              "The population changes because the beetles that are harder to see leave more offspring. No individual beetle changes color. What changes is the proportion of each color in the population from one generation to the next.",
              "The direction of change depends on the environment. When the habitat changes, the beetles that are favored change too. Mutation matters as well. If every beetle were the same color and no mutations occurred, there would be no variation for selection to act on."
            ]
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
              note: "A simulation of a rabbit population with mutations, predators, and limited food. It includes a graph of the population over time."
            }
          ]
        },
        talk: [
          "When the habitat changed, did individual beetles change color? What changed instead?",
          "Why does natural selection need the rare mutations that produce new colors?"
        ],
        summary: "Selection changes which inherited traits are common in a population. When the environment changes, the traits that are favored can change."
      },
      {
        id: "selection-examples",
        title: "Examples of natural selection",
        tease: "Peppered moths, rock pocket mice, and antibiotic resistance.",
        review: [
          "In the beetle simulation, the beetles that were harder to see left more offspring. The proportion of colors changed over generations, and no individual beetle changed color. When the habitat changed, the favored color changed."
        ],
        body: [
          { type: "h", text: "Peppered moths" },
          {
            type: "prose",
            paragraphs: [
              "In England the peppered moth has a pale, speckled form and a dark form. Before the Industrial Revolution, almost all peppered moths were pale, which matched the lichen-covered bark of trees. In the 1800s, soot from coal-burning factories killed the lichen and darkened tree trunks in industrial areas. By the end of the century, nearly all of the moths near Manchester were dark. Birds ate the moths that were easier to see.",
              "After air pollution laws were passed in the mid-1900s, the bark became lighter and the pale form became common again. Experiments in which researchers watched birds eat moths resting on tree trunks confirmed that birds ate more of the moths that did not match the bark."
            ]
          },
          { type: "h", text: "Rock pocket mice" },
          {
            type: "prose",
            paragraphs: [
              "Rock pocket mice live in the deserts of the southwestern United States and northern Mexico. Most live on light-colored sand and have light fur. In some areas the ground is covered with black rock from old lava flows, and the mice there mostly have dark fur. Owls and other predators catch more of the mice that do not match the ground. Some of these lava flows are only a few thousand years old.",
              "Researchers including Michael Nachman and Hopi Hoekstra found that in one lava flow, dark fur is caused by mutations in a gene called Mc1r. On another lava flow, dark fur is caused by mutations in a different gene. The same trait evolved separately in different places because the same kind of selection was acting in each place."
            ]
          },
          { type: "h", text: "Antibiotic resistance" },
          {
            type: "prose",
            paragraphs: [
              "When a person takes an antibiotic, it kills most of the bacteria causing the infection. A few bacteria may carry a mutation that lets them survive, such as a protein that breaks down the drug. Those bacteria reproduce, and the next generation is mostly resistant. The population of bacteria has evolved. The person has not.",
              "Some bacteria, such as Escherichia coli, can divide every 20 to 30 minutes under good conditions, so a population goes through many generations in a day. Methicillin-resistant Staphylococcus aureus, known as MRSA, is a bacterium that has evolved resistance to many antibiotics. Using antibiotics when they are not needed increases the spread of resistant bacteria."
            ]
          }
        ],
        activity: {
          links: [
            {
              kind: "Watch",
              title: "Natural Selection and the Rock Pocket Mouse",
              source: "HHMI BioInteractive",
              url: "https://www.biointeractive.org/classroom-resources/making-fittest-natural-selection-and-adaptation",
              note: "A film on how selection acts on fur color in rock pocket mouse populations."
            },
            {
              kind: "Watch",
              title: "The same film on YouTube",
              source: "HHMI BioInteractive",
              url: "https://www.youtube.com/watch?v=sjeSEngKGrg",
              note: "The same film, for when the HHMI page does not play."
            }
          ],
          quiz: [
            {
              q: "In the peppered moth example, what changed over the years?",
              choices: [
                "Each moth turned darker when the trees became covered in soot.",
                "Dark moths became more common because birds ate fewer of them and they left more offspring.",
                "The birds stopped eating moths."
              ],
              answer: 1,
              why: "Individual moths do not change color to match. The proportion of dark moths in the population changed because dark moths left more offspring."
            },
            {
              q: "When an antibiotic stops working against an infection, what has evolved?",
              choices: [
                "The sick person, who became used to the medicine.",
                "The population of bacteria, in which resistant survivors reproduced.",
                "The antibiotic, which became weaker over time."
              ],
              answer: 1,
              why: "A person's body is not what changed. The bacteria are a population with inherited differences, and the resistant ones left more offspring."
            }
          ]
        },
        talk: [
          "Why is it strong evidence that dark fur in different mouse populations is caused by mutations in different genes?",
          "What would you expect to happen to the peppered moths if the trees became covered in soot again?"
        ],
        summary: "Selection can produce visible change within a few generations when predators or drugs remove many individuals and the species reproduces quickly. It acts only on differences that already exist."
      },
      {
        id: "darwin",
        title: "Darwin and artificial selection",
        tease: "How Darwin developed the theory of evolution by natural selection.",
        review: [
          "Peppered moths, rock pocket mice, and bacteria show selection at work. Dark moths became common when trees were dark with soot, dark mice match dark lava, and antibiotics leave behind resistant bacteria. In each case the proportion of an inherited trait changed in a population."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "Charles Darwin (1809 to 1882) was an English naturalist. In 1831, at the age of 22, he joined the ship HMS Beagle as a naturalist on a five-year survey voyage around the world. He collected fossils, plants, and animals and kept detailed notes. In the Galápagos Islands he noticed that tortoises and mockingbirds differed from island to island. He also collected finches, but he did not record which island each one came from. After he returned to England, the ornithologist John Gould identified the finches as a group of closely related species. Darwin developed his theory over the following two decades."
            ]
          },
          { type: "h", text: "Artificial selection" },
          {
            type: "prose",
            paragraphs: [
              "Darwin was familiar with artificial selection, which is when people choose which animals or plants reproduce. Breeders had produced many varieties of pigeons, dogs, and cattle by choosing which individuals to breed over many generations. Darwin bred pigeons himself.",
              "Many crops show the same process. Cabbage, kale, broccoli, cauliflower, and Brussels sprouts are all varieties of one species, Brassica oleracea, which grows wild on the coasts of Europe. Farmers selected plants with larger leaves to get cabbage and kale, larger flower clusters to get broccoli and cauliflower, and larger buds to get Brussels sprouts. All dogs descend from wolves, and dogs were domesticated more than 14,000 years ago.",
              "Artificial selection works because individuals vary, the variation is inherited, and the breeder chooses which individuals reproduce. Darwin proposed that nature does the same thing without anyone making the choice. Individuals with traits that help them survive and reproduce leave more offspring."
            ]
          },
          { type: "h", text: "The theory" },
          {
            type: "prose",
            paragraphs: [
              "Darwin also proposed that all living things are related through common descent, which means that species descend from earlier species with modifications. He worked on his ideas for about twenty years before publishing them. In 1858, Alfred Russel Wallace, a naturalist working in Southeast Asia, sent Darwin a letter describing the same mechanism. Papers by both men were presented to the Linnean Society in London that year. Darwin's book On the Origin of Species was published in November 1859.",
              "Darwin did not know about genes. Mendel's work on inheritance was published in 1866 but was not widely recognized until about 1900. The modern theory of evolution combines Darwin's ideas with genetics."
            ]
          }
        ],
        activity: {
          links: [
            {
              kind: "Read",
              title: "Artificial selection",
              source: "Understanding Evolution · UC Berkeley",
              url: "https://evolution.berkeley.edu/evolution-101/mechanisms-the-processes-of-evolution/artificial-selection/",
              note: "A short article on artificial selection in pigeons, dogs, and crops."
            },
            {
              kind: "Watch",
              title: "The Origin of Species: The Beak of the Finch",
              source: "HHMI BioInteractive",
              url: "https://www.biointeractive.org/classroom-resources/origin-species-beak-finch",
              note: "A film about Peter and Rosemary Grant's long-term study of finches in the Galápagos."
            }
          ]
        },
        talk: [
          "How is artificial selection similar to natural selection, and how is it different?",
          "Darwin did not know how traits are inherited. Which later discoveries filled that gap?"
        ],
        summary: "Darwin proposed that natural selection works like artificial selection, with the environment doing the choosing, and that species share common ancestors."
      },
      {
        id: "age-of-earth",
        title: "How old is the Earth?",
        tease: "How scientists date rocks and what the timeline of life looks like.",
        review: [
          "Darwin compared natural selection to artificial selection, where breeders choose which individuals reproduce. He also proposed that species share common ancestors. Alfred Russel Wallace came up with the same mechanism independently, and Darwin's book was published in 1859."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "The Earth is about 4.54 billion years old. A billion is a thousand million. If you counted one number per second without stopping, you would reach one million in about 12 days and one billion in about 32 years. Counting to 4.54 billion would take about 144 years. Evolution takes many generations, and the history of the Earth provides that time."
            ]
          },
          { type: "h", text: "Radiometric dating" },
          {
            type: "prose",
            paragraphs: [
              "Scientists measure the age of rocks using radioactive isotopes. Some atoms have unstable nuclei that change into other elements at a fixed rate. Uranium-238 decays into lead-206 with a half-life of 4.47 billion years, which means that half of any amount of uranium-238 turns into lead in that time. Heat, pressure, and chemical reactions do not change this rate.",
              "Zircon crystals take in uranium when they form but exclude lead, so any lead in a zircon came from decay. By measuring the ratio of uranium to lead in a zircon, scientists can calculate how long ago it formed. The oldest minerals found on Earth are zircons from Western Australia that are about 4.4 billion years old. The age of the Earth itself, 4.54 billion years, comes from lead in meteorites that formed along with the solar system. Clair Patterson first calculated it in 1956."
            ]
          },
          { type: "h", text: "Layers and fossils" },
          {
            type: "prose",
            paragraphs: [
              "Sedimentary rock forms in layers, and lower layers are usually older than upper layers. A fossil is the preserved remains or traces of an organism. Most fossils are hard parts such as bones and shells that were buried and slowly replaced by minerals. The oldest fossils of microorganisms are at least 3.5 billion years old. The earliest animal fossils are about 575 million years old. For most of Earth's history, living things were mostly single-celled.",
              "The fossil record is incomplete. Most organisms never become fossils, and erosion has destroyed many rocks. Even so, the order of fossils in rock layers is consistent around the world."
            ]
          },
          {
            type: "aside",
            title: "Dinosaurs and birds",
            text: "About 66 million years ago an asteroid struck what is now the Yucatán Peninsula in Mexico, and the non-bird dinosaurs went extinct. Birds descend from small feathered dinosaurs and survived. Birds are classified as dinosaurs."
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
              note: "An interactive globe that shows how continents, climate, and life have changed over Earth's history. It works best on a larger screen."
            },
            {
              kind: "Read",
              title: "How we know what happened when",
              source: "Understanding Evolution · UC Berkeley",
              url: "https://evolution.berkeley.edu/evolution-101/the-history-of-life-looking-at-the-patterns/how-we-know-what-happened-when/",
              note: "A short article on dating rocks and fossils."
            }
          ]
        },
        talk: [
          "Why can radioactive decay be used to measure time when heat and pressure do not change its rate?",
          "On the one-year calendar, how much of the year passes before the first animals appear?"
        ],
        summary: "The Earth is about 4.54 billion years old. Life has existed for at least 3.5 billion years, and animals appeared about 575 million years ago."
      },
      {
        id: "fossils",
        title: "Fossils",
        tease: "What the order of fossils shows and how Tiktaalik was found.",
        review: [
          "The Earth is about 4.54 billion years old, and radioactive isotopes such as uranium-238 are used to date rocks. Life has existed for at least 3.5 billion years. Animals appeared about 575 million years ago."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "Fossils show the order in which groups of organisms appeared. The oldest rocks that contain animal fossils contain no mammals, birds, or flowering plants. Fish appear first among the vertebrates. Amphibians, reptiles, mammals, and birds appear later, in younger rocks. This order is the same on every continent. A fossil rabbit in a rock layer a billion years old would contradict it, and none has ever been found.",
              "The fossil record also fits what scientists learn from comparing living species. Groups that are closely related, according to anatomy and DNA, tend to appear close together in time."
            ]
          },
          { type: "h", text: "Tiktaalik" },
          {
            type: "prose",
            paragraphs: [
              "Scientists have used the fossil record to make predictions. Neil Shubin, Ted Daeschler, and Farish Jenkins wanted to find a fossil that showed the change from fish to four-legged animals. Fossils of fish about 385 million years old and of four-legged animals about 365 million years old were already known. The team predicted that an animal in between would be found in rocks about 375 million years old that had formed in ancient streams. They looked for places where rocks of that age and type are exposed at the surface, and they chose Ellesmere Island in northern Canada. In 2004 the team found fossils of Tiktaalik roseae.",
              "Tiktaalik was between about 1 and 3 meters long and has features of both fish and four-legged animals. It has scales and fins like a fish. It also has a flat head with eyes on top, a neck that lets the head move separately from the body, and bones in the fin that correspond to the upper arm, forearm, and wrist bones of land vertebrates. It lived in shallow water and could probably prop itself up on its fins.",
              "Tiktaalik is probably not a direct ancestor of land animals. It is a close relative of the group that gave rise to them, so it shows what animals in that transition looked like. Land vertebrates descend from lobe-finned fishes. Lungfish are a living group of lobe-finned fishes, and they are more closely related to humans than they are to salmon or goldfish."
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
              note: "A video about Tiktaalik and the move of vertebrates onto land."
            },
            {
              kind: "Watch",
              title: "The same episode on YouTube",
              source: "PBS Eons",
              url: "https://www.youtube.com/watch?v=E1h4kgt2520",
              note: "The same video, for when the PBS player does not work."
            }
          ]
        },
        talk: [
          "Why is a fossil found in a predicted place stronger evidence than a fossil found by chance and explained afterward?",
          "Which features of Tiktaalik resemble a fish, and which resemble a four-legged animal?"
        ],
        summary: "Fossils appear in the same order around the world. Tiktaalik was found in rocks of the age and type where scientists predicted a fish with limb-like fins would be."
      },
      {
        id: "whale-evolution",
        title: "Whale evolution",
        tease: "How fossils and DNA show that whales descend from land mammals.",
        review: [
          "Fossils appear in the same order on every continent. Neil Shubin and his team predicted the age and kind of rock in which a transitional fossil would be found, and they found Tiktaalik there in 2004. Tiktaalik had fish features and also a neck and wrist-like bones in its fins."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "Whales, dolphins, and porpoises are mammals. They breathe air, are warm-blooded, give birth to live young, and nurse their young with milk. Comparisons of DNA show that the closest living relatives of whales are hippopotamuses. Whales and hippos belong to a larger group that also includes cattle and pigs. This suggested that whales descend from four-legged land mammals.",
              "If that is correct, fossils of early whales should show four legs and a mixture of land and water features. Such fossils have been found, mostly in Pakistan and India, in rocks that are 40 to 50 million years old."
            ]
          },
          { type: "h", text: "The fossil sequence" },
          {
            type: "prose",
            paragraphs: [
              "Indohyus was a hoofed animal about the size of a raccoon that lived in India about 48 million years ago. It has the same thickened ear bone that is otherwise found only in whales, and it is more closely related to whales than any other hoofed animal is. It lived near water.",
              "Pakicetus, about 50 million years old, was about the size of a wolf. It had long legs and lived near fresh water. Its skull has the whale ear structure. Ambulocetus, about 49 million years old, was about 3 meters long. Its name means 'walking whale'. It had short legs with large feet and probably swam by moving its body up and down. Rodhocetus, about 47 million years old, had small hind limbs and spent most of its time in the sea. Basilosaurus, about 40 million years old, was a fully aquatic whale up to about 18 meters long, and it still had tiny hind legs.",
              "Modern whales have a blowhole on top of the head, flippers, and a tail fluke. They also have small hip bones inside the body that are not attached to the spine. These bones are the remains of the pelvis and hind legs of ancestors that walked."
            ]
          }
        ],
        activity: {
          links: [
            {
              kind: "Watch",
              title: "When Whales Walked",
              source: "PBS Eons",
              url: "https://www.pbs.org/video/when-whales-walked-jjfimk/",
              note: "A video about the fossils that show how whales evolved from land mammals."
            },
            {
              kind: "Watch",
              title: "The same episode on YouTube",
              source: "PBS Eons",
              url: "https://www.youtube.com/watch?v=_OSRKtT_9vw",
              note: "The same video, for when the PBS player does not work."
            }
          ]
        },
        talk: [
          "What did scientists expect to find in the fossil record if whales descended from land mammals?",
          "Hippos are the closest living relatives of whales. Does that mean whales descended from hippos? Explain."
        ],
        summary: "Whales are mammals that descend from land mammals. Fossils such as Pakicetus and Ambulocetus have legs, and modern whales still have hip bones."
      },
      {
        id: "homologous-structures",
        title: "Homologous structures",
        tease: "Why different animals share the same bones, and what vestigial structures show.",
        review: [
          "Whales are mammals, and DNA shows that hippos are their closest living relatives. Early whale fossils such as Pakicetus and Ambulocetus had four legs. Modern whales have small hip bones that remain from their walking ancestors."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "Compare the bones in a human arm, a bat's wing, a whale's flipper, and a horse's front leg. Each has one upper bone, two bones in the forearm, a group of small wrist bones, and digits. The bones are in the same order in all four, even though the limbs are used for different things: grasping, flying, swimming, and running. Structures that are similar because they were inherited from a common ancestor are called homologous structures.",
              "Common ancestry explains the pattern. An ancestor of these mammals had a limb with this arrangement of bones, and its descendants modified it. In the bat, the digits became very long and support a wing of skin. In the horse, the animal stands on a single long digit, and the other digits are reduced to small splint bones."
            ]
          },
          { type: "h", text: "Analogous structures" },
          {
            type: "prose",
            paragraphs: [
              "Structures that have a similar function but did not come from a common structure are called analogous structures. Insect wings and bird wings are both used for flight, but they are built differently. An insect wing is a flap of the outer skeleton and contains no bones.",
              "Bird wings and bat wings are homologous as forelimbs, because both contain the arm bones inherited from a common ancestor. They are analogous as wings, because flight evolved separately in birds and bats and the wing structures differ. A bird's wing is covered with feathers, and a bat's wing is skin stretched between long fingers."
            ]
          },
          { type: "h", text: "Vestigial structures" },
          {
            type: "prose",
            paragraphs: [
              "A vestigial structure is a body part that has lost most or all of its original function. Whale hip bones are an example. The human tailbone is the remains of a tail. Humans have tiny muscles at the base of each hair that cause goosebumps. In furry mammals the same muscles fluff up the fur to trap heat. Boas and pythons have small hip and leg bones.",
              "A vestigial structure can still have some use. The human appendix appears to play a role in the immune system, but it is a small version of the large cecum found in many plant-eating mammals."
            ]
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
              note: "A short article with diagrams of homologous and analogous structures."
            }
          ]
        },
        talk: [
          "A shark and a dolphin both have a streamlined body and a fin on the back. Are these structures more likely to be homologous or analogous? What would you need to know to decide?",
          "Why is a shared structure such as the arm bone pattern better evidence of ancestry than a shared function such as flying?"
        ],
        summary: "Homologous structures are similar because they were inherited from a common ancestor. Analogous structures have a similar function but evolved separately."
      },
      {
        id: "genetic-evidence",
        title: "Genetic evidence",
        tease: "What DNA comparisons show about common ancestry.",
        review: [
          "Human arms, bat wings, whale flippers, and horse legs have the same bones in the same order. Homologous structures come from a common ancestor. Analogous structures, such as insect and bird wings, have the same function but different origins."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "All living things use the same genetic code. The same codons specify the same amino acids in bacteria, plants, and humans, with a few small exceptions. The code could have been different in different groups of organisms. Its being the same is what would be expected if all life descends from one common ancestor.",
              "Comparing DNA sequences shows how closely related species are. Human and chimpanzee DNA are about 98 to 99 percent identical in the parts that can be aligned, and the exact figure depends on how the comparison is made. Humans are less similar to mice, less similar still to fish, and less similar again to plants and bacteria. The relationships found with DNA match the relationships found from anatomy and from the fossil record."
            ]
          },
          { type: "h", text: "Human chromosome 2" },
          {
            type: "prose",
            paragraphs: [
              "Humans have 23 pairs of chromosomes. Chimpanzees, gorillas, and orangutans have 24 pairs. Human chromosome 2 matches two separate chromosomes of the other apes joined end to end. In the middle of human chromosome 2 are the remains of telomeres, the sequences that normally cap the ends of chromosomes, and the remains of a second centromere. A fusion of two chromosomes in an ancestor explains why these sequences are found in the middle."
            ]
          },
          { type: "h", text: "Viral DNA in the genome" },
          {
            type: "prose",
            paragraphs: [
              "Some viruses, called retroviruses, insert their DNA into the DNA of the cells they infect. If this happens in a cell that makes eggs or sperm, the viral DNA is inherited by the offspring. About 8 percent of the human genome consists of sequences from retroviruses.",
              "Humans and chimpanzees share many of these insertions at the same locations in the genome. A virus inserts at more or less random locations, so the same insertion at the same location in two species is best explained by a single insertion in a common ancestor."
            ]
          }
        ],
        activity: {
          links: [
            {
              kind: "Look",
              title: "The 4 Types of DNA and Molecular Genealogy",
              source: "Learn.Genetics · University of Utah",
              url: "https://learn.genetics.utah.edu/content/basics/molgen/",
              note: "An overview of how DNA is used to trace family relationships."
            },
            {
              kind: "Read",
              title: "Genetics evidence for human evolution",
              source: "Smithsonian Human Origins",
              url: "https://humanorigins.si.edu/evidence/genetics",
              note: "A summary of the genetic evidence, including chromosome 2 and shared DNA."
            }
          ]
        },
        talk: [
          "Why is a shared chromosome fusion or a shared viral insertion better evidence of ancestry than a trait that is useful to both species?",
          "Does the similarity of human and chimpanzee DNA mean that humans evolved from chimpanzees? What does it mean?"
        ],
        summary: "All life shares one genetic code. DNA similarities, the fused human chromosome 2, and shared viral insertions all point to common ancestry."
      },
      {
        id: "speciation",
        title: "Speciation",
        tease: "How one species becomes two, with Darwin's finches as an example.",
        review: [
          "All life uses the same genetic code. Human DNA is most similar to chimpanzee DNA, and then to the DNA of other species in the order that anatomy and fossils suggest. Human chromosome 2 is a fusion of two ape chromosomes, and humans and chimpanzees share viral insertions at the same locations."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "A species is often defined as a group of organisms that can breed with each other and produce fertile offspring. This definition works well for most animals. It does not work well for bacteria, which mostly reproduce by dividing, or for fossils, where breeding cannot be tested. Biologists use several different definitions of species for this reason."
            ]
          },
          { type: "h", text: "How new species form" },
          {
            type: "prose",
            paragraphs: [
              "Speciation is the formation of a new species. It usually begins when a population is divided and the two parts stop exchanging genes. Geography is a common cause. A river, a mountain range, or an ocean can separate the groups. Gene flow is the movement of alleles between populations through breeding. When gene flow stops, mutations build up separately in each population, selection acts differently if the environments differ, and genetic drift acts separately on each one.",
              "After many generations the two populations may be so different that they can no longer interbreed. At that point they are separate species. If the populations meet again before they have diverged enough, they interbreed and the differences can disappear. Speciation happens in populations over many generations. A single animal does not give birth to a new species."
            ]
          },
          { type: "h", text: "Darwin's finches" },
          {
            type: "prose",
            paragraphs: [
              "Darwin's finches live on the Galápagos Islands. They descend from a species of finch that arrived from South America about 2 to 3 million years ago. The finches spread to different islands and diversified into about 15 species with different beaks. Species with large, deep beaks crush hard seeds, and species with narrow beaks eat insects. The woodpecker finch uses cactus spines to dig insects out of wood.",
              "Peter and Rosemary Grant, biologists from Princeton University, have studied finches on the small island of Daphne Major since 1973. In 1977 a drought killed most of the plants that produce small, soft seeds, and mostly large, hard seeds were left. About 85 percent of the medium ground finches on the island died. Birds with deeper beaks could crack the hard seeds and were more likely to survive. The next generation had beaks that were about 4 percent deeper on average."
            ]
          }
        ],
        activity: {
          links: [
            {
              kind: "Read",
              title: "Defining a species",
              source: "Understanding Evolution · UC Berkeley",
              url: "https://evolution.berkeley.edu/evolution-101/speciation/defining-a-species/",
              note: "A short article on the different ways biologists define a species."
            },
            {
              kind: "Read",
              title: "Causes of speciation",
              source: "Understanding Evolution · UC Berkeley",
              url: "https://evolution.berkeley.edu/evolution-101/speciation/causes-of-speciation/",
              note: "An article on how populations become separate species."
            }
          ]
        },
        talk: [
          "Why does one animal not give birth to a new species?",
          "What would happen to two populations that had started to diverge if gene flow between them started again?"
        ],
        summary: "A new species forms when populations stop exchanging genes for long enough that they diverge. The Galápagos finches are an example."
      },
      {
        id: "eye-evolution",
        title: "Evolution of the eye",
        tease: "How eyes evolved in stages, and what imperfect structures show.",
        review: [
          "A species is a group that breeds together and produces fertile offspring. Speciation usually starts when a population is divided and gene flow stops. Darwin's finches diversified on the Galápagos Islands, and the Grants measured beak size change in a drought."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "Some people ask what use half an eye would be. Eyes can work in stages, and each stage is useful. Some single-celled organisms have a light-sensitive spot that detects whether it is light or dark. Flatworms have a cup of light-sensitive cells that detects the direction of the light. The chambered nautilus has a pinhole eye, which is an open cup with a small opening that forms a dim image without a lens. Squid, octopuses, fish, and humans have a lens that focuses light to form a sharp image. All of these kinds of eye exist in living animals, and each one gives an advantage over having a simpler eye.",
              "Eyes evolved many times independently. Vertebrate eyes and octopus eyes both have a lens and a retina, but they evolved separately and differ in design. In the vertebrate eye, the nerve fibers from the light-detecting cells run across the front of the retina and pass through it at one place to reach the brain. There are no light-detecting cells at that place, which creates a blind spot. In the octopus eye, the nerve fibers run behind the retina, so there is no blind spot."
            ]
          },
          { type: "h", text: "Limits of natural selection" },
          {
            type: "prose",
            paragraphs: [
              "Natural selection modifies structures that already exist. It cannot redesign an organism from scratch. The recurrent laryngeal nerve connects the brain to the voice box. In fish, the corresponding nerve runs directly from the brain to the gills. In mammals the neck lengthened and the heart moved down into the chest, and the nerve was carried along with it. It now loops under a major artery near the heart before running back up to the voice box. In a giraffe this route is several meters long, even though the voice box is only a short distance from the brain.",
              "Traits often involve tradeoffs. Walking upright frees the hands, but it makes childbirth more difficult and puts strain on the lower back. Natural selection favors traits that help survival and reproduction in the environment at the time. It does not produce an ideal design."
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
              note: "An article on common misunderstandings, such as the idea that evolution has a goal."
            }
          ]
        },
        talk: [
          "Why is a partly developed eye still useful?",
          "The laryngeal nerve of a giraffe takes a very long route. Why does natural selection not shorten it?"
        ],
        summary: "Eyes evolved in useful stages, and more than once. Natural selection modifies what already exists, so organisms have imperfect features such as the blind spot."
      },
      {
        id: "tree-of-life",
        title: "The tree of life",
        tease: "How all living things are related and how the major groups are arranged.",
        review: [
          "Eyes evolved in stages that were each useful. Vertebrate and octopus eyes evolved separately. Natural selection modifies existing structures, which explains the blind spot and the long path of the giraffe's laryngeal nerve."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "Biologists group all living things into three domains: Bacteria, Archaea, and Eukarya. Bacteria and Archaea are single-celled organisms without a nucleus. Eukarya includes all organisms whose cells have a nucleus, such as animals, plants, fungi, and single-celled organisms like amoebas. Humans belong to Eukarya. Archaea are not a type of bacteria. They are a separate group, and eukaryotes are more closely related to archaea than to bacteria."
            ]
          },
          { type: "h", text: "Mitochondria and chloroplasts" },
          {
            type: "prose",
            paragraphs: [
              "Mitochondria are the parts of eukaryotic cells that release energy from food. They have their own small, circular DNA, similar to bacterial DNA, and they reproduce by dividing. The evidence indicates that mitochondria descend from bacteria that were taken in by an ancestor of eukaryotic cells about 2 billion years ago and then lived inside it. Chloroplasts in plants and algae descend from photosynthetic bacteria in the same way. This idea is called endosymbiosis. Lynn Margulis proposed it in 1967."
            ]
          },
          { type: "h", text: "The last universal common ancestor" },
          {
            type: "prose",
            paragraphs: [
              "All living things share a common ancestor, called LUCA, the last universal common ancestor. It lived at least 3.5 billion years ago. LUCA was already a cell with DNA, RNA, ribosomes, and the genetic code, so it was not the first form of life. Earlier forms of life left no direct evidence.",
              "The tree of life shows lines of descent. It is not a ladder from simple to complex organisms. Every living species has had the same amount of time to evolve since its lineage split from the others. Bacteria living today are not primitive versions of other organisms, and humans are not more evolved than bacteria. Most animal species are invertebrates, which are animals without a backbone. Fungi are more closely related to animals than plants are."
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
              note: "An article on why evolutionary relationships are drawn as trees and not as ladders."
            },
            {
              kind: "Read",
              title: "The family tree",
              source: "Understanding Evolution · UC Berkeley",
              url: "https://evolution.berkeley.edu/evolution-101/the-history-of-life-looking-at-the-patterns/the-family-tree/",
              note: "An article on how biologists draw and read evolutionary trees."
            }
          ]
        },
        talk: [
          "Why are fungi more closely related to animals than plants are? What does 'more closely related' mean on a tree?",
          "Was LUCA the first living thing? What was it?"
        ],
        summary: "All life descends from a common ancestor and falls into three domains. The tree of life is a branching tree, not a ladder, and humans are one branch among many."
      },
      {
        id: "human-evolution",
        title: "Human evolution",
        tease: "What fossils and DNA show about the origin of our species.",
        review: [
          "Living things fall into three domains: Bacteria, Archaea, and Eukarya. Mitochondria descend from bacteria that lived inside an ancestor of eukaryotic cells. The tree of life branches, and no living species is more evolved than another."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "Humans belong to the group of apes, which also includes chimpanzees, bonobos, gorillas, orangutans, and gibbons. Chimpanzees and bonobos are our closest living relatives. Humans and chimpanzees share a common ancestor that lived about 6 to 7 million years ago. Humans did not evolve from chimpanzees. Both lineages have changed since they split, and chimpanzees living today are as evolved as humans are."
            ]
          },
          { type: "h", text: "The fossil record" },
          {
            type: "prose",
            paragraphs: [
              "Fossils show that walking upright came before large brains. Australopithecus afarensis lived in East Africa from about 3.9 to 3 million years ago. The best-known fossil, nicknamed Lucy, was found in Ethiopia in 1974 and is about 3.2 million years old. She walked upright and had a brain of about 400 cubic centimeters, which is about the size of a chimpanzee's. Footprints at Laetoli in Tanzania, made about 3.7 million years ago, also show upright walking. The brain of a modern human is about 1,350 cubic centimeters.",
              "Homo erectus appeared in Africa about 1.9 million years ago. It had a brain of about 900 cubic centimeters and was the first human species to spread widely beyond Africa. Homo sapiens, our species, appeared in Africa at least 300,000 years ago. Fossils from Jebel Irhoud in Morocco are about 300,000 years old.",
              "For most of that time there were other human species alive. Neanderthals lived in Europe and western Asia until about 40,000 years ago. Denisovans lived in Asia. Homo sapiens interbred with both groups. People whose ancestors lived outside Africa have about 1 to 2 percent Neanderthal DNA on average."
            ]
          },
          { type: "h", text: "Recent human evolution" },
          {
            type: "prose",
            paragraphs: [
              "Humans are still evolving. Skin color depends on the amount of melanin in the skin. Darker skin protects against ultraviolet radiation, which breaks down folate, a B vitamin. Lighter skin lets more ultraviolet light through, which helps the body make vitamin D where sunlight is weaker. Skin color varies gradually across regions in relation to ultraviolet levels, and it does not fall into separate categories.",
              "Lactase persistence is the ability to digest the sugar in milk as an adult. It evolved separately in several populations that kept dairy animals, including in Europe and East Africa. Many people in Tibet carry a variant of the gene EPAS1 that helps them live at high altitude where there is less oxygen."
            ]
          }
        ],
        activity: {
          links: [
            {
              kind: "Read",
              title: "Introduction to Human Evolution",
              source: "Smithsonian Human Origins",
              url: "https://humanorigins.si.edu/education/introduction-human-evolution",
              note: "An overview of human evolution from the Smithsonian."
            },
            {
              kind: "Look",
              title: "Human family tree",
              source: "Smithsonian Human Origins",
              url: "https://humanorigins.si.edu/evidence/human-family-tree",
              note: "An interactive chart of human species and when they lived."
            }
          ]
        },
        talk: [
          "Which came first in the human lineage, upright walking or a large brain? What evidence shows this?",
          "Why is skin color best explained as an adaptation to sunlight and not as a way of dividing people into groups?"
        ],
        summary: "Humans are apes whose closest living relatives are chimpanzees and bonobos. Upright walking evolved before large brains, and Homo sapiens appeared in Africa at least 300,000 years ago."
      },
      {
        id: "evolution-now",
        title: "Evolution happening now",
        tease: "Examples of evolution observed over a few years or decades.",
        review: [
          "Humans are apes, and our closest living relatives are chimpanzees and bonobos. Fossils show that upright walking came before large brains. Homo sapiens appeared in Africa at least 300,000 years ago, and our species is still evolving."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "Evolution can be observed directly when selection is strong or when organisms reproduce quickly. Many cases have been measured within the lifetimes of the scientists studying them."
            ]
          },
          { type: "h", text: "Soapberry bugs" },
          {
            type: "prose",
            paragraphs: [
              "Soapberry bugs in Florida feed on the seeds of plants by piercing the fruit with a beak. The native balloon vine has large, round fruits, and bugs that feed on it have long beaks. The goldenrain tree, introduced from Asia, has flat fruits, and bugs feeding on it have evolved shorter beaks over a few decades."
            ]
          },
          { type: "h", text: "Italian wall lizards" },
          {
            type: "prose",
            paragraphs: [
              "In 1971, scientists moved five pairs of Italian wall lizards to a small island in Croatia called Pod Mrčaru. When researchers returned about 36 years later, the lizards had larger heads and a stronger bite. They also had new valves in their gut that help digest plants, because the lizards on the island ate more plants than the original population did."
            ]
          },
          { type: "h", text: "Pesticide and herbicide resistance" },
          {
            type: "prose",
            paragraphs: [
              "Houseflies and mosquitoes evolved resistance to the pesticide DDT within a few years of its widespread use in the 1940s and 1950s. Many weeds, including Palmer amaranth, have evolved resistance to the herbicide glyphosate. The pattern is the same each time. A rare resistant individual survives the chemical, and its offspring make up most of the next generation."
            ]
          },
          { type: "h", text: "Stickleback fish" },
          {
            type: "prose",
            paragraphs: [
              "Threespine sticklebacks live in the sea and in fresh water. After the last ice age, sea populations colonized many lakes. In many lakes the fish lost the spines on their pelvic fins. In several of these populations, the loss is caused by a deletion in the part of the DNA that switches on a gene called Pitx1 in the developing pelvis.",
              "Biologists still debate some questions about evolution, such as how often change happens in rapid bursts and how important genetic drift is compared with natural selection. These are questions about how evolution works. They are not questions about whether it happens."
            ]
          }
        ],
        activity: {
          links: [
            {
              kind: "Read",
              title: "Natural selection at work",
              source: "Understanding Evolution · UC Berkeley",
              url: "https://evolution.berkeley.edu/evolution-101/mechanisms-the-processes-of-evolution/natural-selection-at-work/",
              note: "Examples of natural selection that have been observed."
            },
            {
              kind: "Watch",
              title: "Evolving Switches, Evolving Bodies",
              source: "HHMI BioInteractive",
              url: "https://www.biointeractive.org/classroom-resources/making-fittest-evolving-switches-evolving-bodies",
              note: "A film about how changes in gene switches changed the bodies of stickleback fish."
            }
          ]
        },
        talk: [
          "Which of these examples could a person observe in a single lifetime? Which would need fossils to study?",
          "Why do bacteria and insects show evolution faster than elephants or humans do?"
        ],
        summary: "Evolution has been measured in bugs, lizards, weeds, and fish. It is fastest in organisms that reproduce quickly and face strong selection."
      },
      {
        id: "evidence",
        title: "Evidence for evolution",
        tease: "What a scientific theory is and how the lines of evidence fit together.",
        review: [
          "Soapberry bugs, Italian wall lizards, resistant weeds, and stickleback fish have all been observed evolving. Evolution is fastest in organisms that reproduce quickly and face strong selection. Biologists debate details of how evolution works."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "In everyday speech, 'theory' can mean a guess. In science, a hypothesis is an idea that can be tested, and a theory is a well-tested explanation that accounts for many observations. The theory of gravity and the germ theory of disease are other examples. The theory of evolution says that populations change over time, mainly through natural selection and also through other processes such as genetic drift, and that all living things share common ancestors."
            ]
          },
          { type: "h", text: "Predictions that could fail" },
          {
            type: "prose",
            paragraphs: [
              "A good theory makes predictions that could show it to be wrong. Evolution predicts that fossils appear in a consistent order, so a rabbit fossil in a billion-year-old rock would be a serious problem. It predicts that the relationships found from anatomy and from DNA should agree, and they do. It predicts that fossils such as Tiktaalik and early whales should be found in rocks of particular ages, and they have been."
            ]
          },
          { type: "h", text: "Lines of evidence" },
          {
            type: "prose",
            paragraphs: [
              "Fossils show a consistent order of life through time, with transitional forms such as Tiktaalik and Ambulocetus. Homologous structures, such as the arm bones of humans, bats, whales, and horses, show common ancestry, and vestigial structures such as whale hip bones show that organisms carry features from their ancestors. DNA shows the same genetic code in all living things, nested patterns of similarity that match the fossil record, the fused human chromosome 2, and viral insertions shared at the same locations.",
              "Geography adds evidence. Species on islands resemble species on the nearest mainland, as the Galápagos finches resemble South American finches. Embryos add more. The embryos of fish, birds, and humans all form pharyngeal arches. These become gills in fish and parts of the jaw, ear, and throat in humans. Dating methods based on radioactive decay agree with the order of fossils in rock layers. Finally, evolution has been observed directly in moths, finches, bacteria, and many other organisms.",
              "Many independent lines of evidence lead to the same conclusion. This agreement is what scientists mean when they say that common descent is well established. Open questions about the details do not change that."
            ]
          }
        ],
        activity: {
          quiz: [
            {
              q: "A person lifts weights for years and builds large muscles. Their baby is born with large muscles. What is the correct explanation?",
              choices: [
                "The body passes on what it has practiced.",
                "Muscles built during a lifetime are not written into the DNA in eggs and sperm, so they are not inherited.",
                "It is true, but only if the weightlifter is the mother."
              ],
              answer: 1,
              why: "Changes to ordinary body cells are not passed on. Evolution depends on inherited differences that lead to more offspring."
            },
            {
              q: "In biology, what does fitness mean?",
              choices: [
                "Being the strongest or smartest.",
                "Leaving more offspring in a given environment.",
                "Living the longest, even without offspring."
              ],
              answer: 1,
              why: "A trait is fit only in relation to an environment and way of life. Fitness is measured by offspring."
            },
            {
              q: "Did humans evolve from chimpanzees?",
              choices: [
                "Yes. Chimpanzees are our ancestors.",
                "No. Humans and chimpanzees share a common ancestor that was neither of them.",
                "Yes, but through gorillas."
              ],
              answer: 1,
              why: "Both lineages kept changing after they split. Chimpanzees living today are not our ancestors."
            },
            {
              q: "Why would a fossil rabbit in rock a billion years old be a problem for evolution?",
              choices: [
                "Rabbits cannot become fossils.",
                "All other evidence shows that rabbits appeared very late, long after a billion years ago.",
                "Rabbits are rare."
              ],
              answer: 1,
              why: "The fossil record makes a prediction about order. A genuine fossil rabbit in such old rock would contradict a large and consistent body of evidence."
            },
            {
              q: "Are humans more evolved than bacteria?",
              choices: [
                "Yes. Humans are the goal of evolution.",
                "No. Evolution has no goal, and bacteria have been evolving for as long as humans have since their lineages split.",
                "Yes, because simple organisms stop evolving."
              ],
              answer: 1,
              why: "Every living lineage has been changing since it split from the others. A more complex organism is not more evolved."
            },
            {
              q: "Are birds dinosaurs?",
              choices: [
                "No. All dinosaurs went extinct, and birds are unrelated.",
                "Yes. Birds descend from small feathered dinosaurs that survived.",
                "Only in cartoons."
              ],
              answer: 1,
              why: "The non-bird dinosaurs went extinct 66 million years ago. Birds are the dinosaur lineage that survived."
            }
          ],
          links: [
            {
              kind: "Read",
              title: "Misconceptions about evolution",
              source: "Understanding Evolution · UC Berkeley",
              url: "https://evolution.berkeley.edu/teach-evolution/misconceptions-about-evolution/",
              note: "An article that corrects common misunderstandings about evolution."
            },
            {
              kind: "Read",
              title: "Evolution 101",
              source: "Understanding Evolution · UC Berkeley",
              url: "https://evolution.berkeley.edu/evolution-101/",
              note: "The start of a full introduction to evolution."
            }
          ]
        },
        talk: [
          "What kind of discovery would count as evidence against evolution?",
          "Which line of evidence do you find most convincing, and why?"
        ],
        summary: "Fossils, anatomy, DNA, geography, embryos, dating, and direct observation all support evolution and common descent."
      }
    ]
  });
})();
