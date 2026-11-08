/* Atoms and molecules course. */
(function () {
  window.SCIENCE_COURSES = window.SCIENCE_COURSES || [];
  window.SCIENCE_COURSES.push({
    id: "atoms-molecules",
    title: "Atoms and molecules",
    order: 1,
    added: "2026-11-08",
    blurb: "What everything is made of. The course covers protons, neutrons, and electrons, the periodic table, ions, chemical bonds, molecular shape, isotopes and radioactive decay, and how substances dissolve and conduct electricity.",
    lessons: [
      {
        id: "atoms-and-scale",
        title: "Atoms and scale",
        tease: "What atoms are and how small they are.",
        body: [
          {
            type: "prose",
            paragraphs: [
              "All matter is made of atoms. Matter is anything that has mass and takes up space, including air, water, rocks, and people. Atoms join together in different combinations to make every substance. Water is made of hydrogen atoms and oxygen atoms. Table salt is made of sodium atoms and chlorine atoms.",
              "There are about 90 kinds of atoms that occur naturally on Earth, and a few more that scientists have made in laboratories. Each kind of atom is called an element. Hydrogen, carbon, oxygen, iron, gold, and uranium are all elements."
            ]
          },
          { type: "h", text: "How small an atom is" },
          {
            type: "prose",
            paragraphs: [
              "An atom is about 0.1 nanometer across. A nanometer is one billionth of a meter, so an atom is about one ten-billionth of a meter wide. A human hair is roughly 500,000 to 1,000,000 atoms thick. A single grain of sand contains more than 10 billion billion atoms (10¹⁹).",
              "Atoms are too small to see with a normal microscope, because they are smaller than the wavelength of visible light. Pictures of individual atoms are made with instruments such as the scanning tunneling microscope, which was invented in 1981."
            ]
          },
          { type: "h", text: "Inside an atom" },
          {
            type: "prose",
            paragraphs: [
              "Every atom has a nucleus in the center. The nucleus is made of particles called protons and neutrons. Much smaller particles called electrons surround the nucleus.",
              "The nucleus is tiny compared with the whole atom. Its width is about 1/10,000 of the atom's width. Even so, it contains more than 99.9 percent of the atom's mass, because protons and neutrons are much heavier than electrons. Most of the volume of an atom is the space where the electrons are found."
            ]
          }
        ],
        activity: {
          links: [
            {
              kind: "Watch",
              title: "Just How Small is an Atom?",
              source: "TED-Ed",
              url: "https://www.youtube.com/watch?v=yQP4UJhNn0I",
              note: "A short video on the size of atoms, compared with things we can see."
            },
            {
              kind: "Try",
              title: "The Scale of the Universe",
              source: "Cary and Michael Huang",
              url: "https://universe.pavelfrolov.com/en/",
              note: "Zoom from the smallest known sizes up to the whole universe. Atoms and the nucleus are near the small end."
            }
          ],
          quiz: [
            {
              q: "Which statement about the nucleus is true?",
              choices: [
                "It takes up most of the atom's volume and most of its mass.",
                "It takes up very little of the volume but holds almost all of the mass.",
                "It has the same mass as the electrons around it."
              ],
              answer: 1,
              why: "The nucleus is about 1/10,000 of the atom's width, but protons and neutrons are far heavier than electrons, so the nucleus holds more than 99.9 percent of the mass."
            }
          ]
        },
        talk: [
          "Why can't we see atoms with an ordinary microscope?",
          "Water and table salt are both made of atoms. What makes them different substances?"
        ],
        summary: "Everything is made of atoms, and each kind of atom is an element. An atom is about 0.1 nanometer wide, with a tiny nucleus holding almost all of the mass and electrons around it."
      },
      {
        id: "subatomic-particles",
        title: "Protons, neutrons, and electrons",
        tease: "The three particles in an atom and what each one does.",
        review: [
          "All matter is made of atoms, and each kind of atom is an element. An atom is about 0.1 nanometer wide. It has a small nucleus in the center that holds almost all of the mass, with electrons around it."
        ],
        body: [
          { type: "h", text: "The three particles" },
          {
            type: "prose",
            paragraphs: [
              "A **proton** has a positive electric charge. A **neutron** has no charge. An **electron** has a negative charge, equal in size to the proton's charge but opposite. Protons and neutrons are in the nucleus. Electrons are outside it.",
              "A proton is about 1,836 times as heavy as an electron. A neutron is slightly heavier than a proton. Electric charge matters because opposite charges attract and like charges repel. The attraction between the positive nucleus and the negative electrons holds an atom together.",
              "Protons in a nucleus repel each other, since they all have the same charge. A different force, the strong nuclear force, pulls protons and neutrons together at very short distances. It is stronger than the electric repulsion inside the nucleus, so the nucleus stays together."
            ]
          },
          { type: "h", text: "The number of protons decides the element" },
          {
            type: "prose",
            paragraphs: [
              "The number of protons in an atom is its **atomic number**. Every atom with 1 proton is hydrogen. Every atom with 6 protons is carbon, with 8 protons oxygen, with 11 protons sodium, with 17 protons chlorine, and with 79 protons gold. If an atom gains or loses a proton, it becomes a different element.",
              "A neutral atom has the same number of electrons as protons, so the positive and negative charges cancel. A neutral carbon atom has 6 protons and 6 electrons. The most common kind of carbon atom also has 6 neutrons.",
              "The **mass number** is the number of protons plus the number of neutrons. The common carbon atom has a mass number of 12 and is called carbon-12. The number of neutrons can differ between atoms of the same element, which the next lesson covers.",
              "Electrons can be added to an atom or removed from it without changing the element. This leaves the atom with an electric charge. A charged atom is called an ion."
            ]
          }
        ],
        activity: {
          links: [
            {
              kind: "Try",
              title: "Build an Atom",
              source: "PhET · University of Colorado",
              url: "https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_en.html",
              note: "Add protons, neutrons, and electrons and see which element you have built, its charge, and its mass number."
            }
          ],
          quiz: [
            {
              q: "An atom has 8 protons, 8 neutrons, and 8 electrons. What is its mass number?",
              choices: ["8", "16", "24"],
              answer: 1,
              why: "The mass number is protons plus neutrons, which is 8 + 8 = 16. Electrons are so light that they are not counted."
            },
            {
              q: "What happens if a carbon atom gains a proton?",
              choices: [
                "It stays carbon but gets a positive charge.",
                "It becomes nitrogen.",
                "It becomes a carbon ion."
              ],
              answer: 1,
              why: "The number of protons decides the element. Carbon has 6 protons, so an atom with 7 protons is nitrogen."
            }
          ]
        },
        talk: [
          "In Build an Atom, make a neutral carbon-12 atom. Then remove one electron. What changes, and what stays the same?",
          "Why does the nucleus not fly apart, even though protons repel each other?"
        ],
        summary: "Protons are positive, neutrons are neutral, and electrons are negative. The number of protons is the atomic number and decides the element. A neutral atom has equal numbers of protons and electrons."
      },
      {
        id: "isotopes",
        title: "Isotopes",
        tease: "Atoms of one element with different numbers of neutrons.",
        review: [
          "Protons are positive, neutrons are neutral, and electrons are negative. The number of protons is the atomic number and decides the element. The mass number is the number of protons plus the number of neutrons."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "Atoms of the same element always have the same number of protons, but they can have different numbers of neutrons. Atoms of one element with different numbers of neutrons are called **isotopes**. Carbon has three well-known isotopes. Carbon-12 has 6 protons and 6 neutrons. Carbon-13 has 6 protons and 7 neutrons. Carbon-14 has 6 protons and 8 neutrons. The isotope's name is the element and the mass number.",
              "Isotopes of an element have almost identical chemical behavior, because chemistry depends on the electrons and they all have the same number of electrons. They differ in mass. Most elements in nature are a mixture of isotopes. About 98.9 percent of carbon atoms are carbon-12, about 1.1 percent are carbon-13, and only a trace is carbon-14."
            ]
          },
          { type: "h", text: "Atomic mass" },
          {
            type: "prose",
            paragraphs: [
              "The atomic mass on the periodic table is the average mass of the atoms in a natural sample. It is not a whole number for most elements because of isotopes. Chlorine is 35.45, because about 76 percent of chlorine atoms are chlorine-35 and about 24 percent are chlorine-37."
            ]
          },
          { type: "h", text: "Stable and unstable nuclei" },
          {
            type: "prose",
            paragraphs: [
              "Some isotopes are stable and some are radioactive. A nucleus is held together by the strong nuclear force, which works only at very short distances. The electric repulsion between protons works over longer distances. Neutrons add to the attraction without adding repulsion, so larger nuclei need more neutrons than protons to stay together. Lead-208 has 82 protons and 126 neutrons.",
              "If a nucleus has too many or too few neutrons for its number of protons, it is unstable. Every element with more than 83 protons has no stable isotopes. Uranium has 92 protons, and all of its isotopes are radioactive. Uranium-238 has 146 neutrons."
            ]
          }
        ],
        activity: {
          links: [
            {
              kind: "Watch",
              title: "What are Isotopes?",
              source: "FuseSchool",
              url: "https://www.youtube.com/watch?v=xjY5p-1CDr8",
              note: "A short video on isotopes, using chlorine-35 and chlorine-37 as the example."
            },
            {
              kind: "Try",
              title: "Isotopes and Atomic Mass",
              source: "PhET · University of Colorado",
              url: "https://phet.colorado.edu/sims/html/isotopes-and-atomic-mass/latest/isotopes-and-atomic-mass_en.html",
              note: "Build isotopes of different elements and see how their mixture sets the atomic mass."
            }
          ],
          quiz: [
            {
              q: "How many neutrons does carbon-14 have?",
              choices: ["6", "8", "14"],
              answer: 1,
              why: "The mass number is 14 and carbon has 6 protons, so the number of neutrons is 14 - 6 = 8."
            },
            {
              q: "What is the same in carbon-12 and carbon-14?",
              choices: [
                "The number of protons",
                "The number of neutrons",
                "The mass number"
              ],
              answer: 0,
              why: "Both are carbon, so both have 6 protons. The neutrons and the mass number differ."
            }
          ]
        },
        talk: [
          "Why is the atomic mass of chlorine not a whole number?",
          "How many protons and neutrons does uranium-235 have?"
        ],
        summary: "Isotopes are atoms of the same element with different numbers of neutrons. They behave alike chemically but differ in mass, and some are radioactive."
      },
      {
        id: "radioactive-decay",
        title: "Radioactive decay and half-life",
        tease: "How unstable nuclei change, and how that is used to measure time.",
        review: [
          "Isotopes are atoms of one element with different numbers of neutrons. They have the same chemistry but different masses. A nucleus with too many or too few neutrons is unstable, and every element above 83 protons has only unstable isotopes."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "An unstable nucleus can change into a different nucleus by giving off radiation. This is **radioactive decay**. There are three common kinds. In alpha decay, the nucleus emits an alpha particle, which is 2 protons and 2 neutrons, the same as a helium nucleus. In beta decay, a neutron in the nucleus turns into a proton and an electron is emitted. In gamma decay, the nucleus emits a high-energy form of light and keeps the same numbers of protons and neutrons.",
              "Alpha and beta decay change the number of protons, so they change the element. Carbon-14, with 6 protons and 8 neutrons, undergoes beta decay and becomes nitrogen-14, with 7 protons and 7 neutrons. The electron that is emitted is created during the decay. It is not one of the atom's orbital electrons."
            ]
          },
          { type: "h", text: "Half-life" },
          {
            type: "prose",
            paragraphs: [
              "It is impossible to predict when a single nucleus will decay. Each nucleus has the same chance of decaying in any given time, and the chance does not depend on how long it has existed. For a large number of nuclei, though, the result is predictable. The **half-life** is the time it takes for half of the nuclei in a sample to decay.",
              "Carbon-14 has a half-life of 5,730 years. After 5,730 years, half of the carbon-14 in a sample remains. After 11,460 years, a quarter remains. After 17,190 years, an eighth remains. Heat, pressure, and chemical reactions do not change the half-life. Different isotopes have very different half-lives. Some last a fraction of a second, and uranium-238 has a half-life of 4.47 billion years."
            ]
          },
          { type: "h", text: "Radiocarbon dating" },
          {
            type: "prose",
            paragraphs: [
              "Cosmic rays create carbon-14 in the upper atmosphere, and it mixes into carbon dioxide. Plants take it in, and animals get it by eating plants. While an organism is alive, its ratio of carbon-14 to carbon-12 matches the ratio in the air. When it dies, it stops taking in carbon, and the carbon-14 decays without being replaced. Measuring the remaining carbon-14 tells how long ago the organism died. The method works for samples up to about 50,000 years old. For rocks that are millions or billions of years old, scientists use isotopes with longer half-lives, such as uranium-238."
            ]
          }
        ],
        activity: {
          widget: "halflife",
          links: [
            {
              kind: "Watch",
              title: "Radioactivity: Expect the unexpected",
              source: "TED-Ed",
              url: "https://www.youtube.com/watch?v=TJgc28csgV0",
              note: "A video on radioactive decay and what makes a nucleus unstable."
            },
            {
              kind: "Watch",
              title: "Half Life",
              source: "FuseSchool",
              url: "https://www.youtube.com/watch?v=IDkNlU7zKYU",
              note: "A short explanation of half-life with examples."
            },
            {
              kind: "Try",
              title: "Alpha Decay",
              source: "PhET · University of Colorado",
              url: "https://phet.colorado.edu/en/simulations/alpha-decay",
              note: "Watch individual nuclei decay at random while the group follows the half-life."
            },
            {
              kind: "Try",
              title: "Radioactive Decay and Half-Life Simulator",
              source: "LK Forge",
              url: "https://lkforge.com/tools/physics/radioactive-decay/",
              note: "Set a half-life and watch a sample decay over time."
            },
            {
              kind: "Read",
              title: "Half-Life",
              source: "American Association of Chemistry Teachers",
              url: "https://teachchemistry.org/classroom-resources/half-life",
              note: "A classroom activity that models half-life with coins. It can be done at a table with real coins."
            }
          ],
          quiz: [
            {
              q: "A sample has 80 grams of an isotope with a half-life of 10 years. How much is left after 20 years?",
              choices: ["40 grams", "20 grams", "0 grams"],
              answer: 1,
              why: "After 10 years, half is left, which is 40 grams. After another 10 years, half of that is left, which is 20 grams."
            }
          ]
        },
        talk: [
          "Why can we predict how much of a sample will be left, even though we cannot predict when one nucleus will decay?",
          "A bone has one quarter of the carbon-14 that a living animal has. About how old is it?"
        ],
        summary: "Unstable nuclei decay by emitting radiation. Each nucleus decays at random, but half of a large sample decays in one half-life. The half-life of carbon-14, 5,730 years, is used for dating."
      },
      {
        id: "periodic-table",
        title: "The periodic table",
        tease: "How the elements are organized and what the table shows.",
        review: [
          "Unstable nuclei decay by emitting radiation, and alpha and beta decay change the element. Each nucleus decays at random, but half of a large sample decays in one half-life. Carbon-14 has a half-life of 5,730 years, and it is used to date remains up to about 50,000 years old."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "The periodic table lists all of the known elements in order of atomic number. There are 118. Each box shows the element's symbol, such as H for hydrogen or Fe for iron, its name, its atomic number, and its atomic mass.",
              "A row of the table is called a **period**, and a column is called a **group**. There are 7 periods and 18 groups. Elements in the same group have similar chemical properties. The table is arranged this way so that elements that behave alike end up in the same column."
            ]
          },
          { type: "h", text: "Groups with similar behavior" },
          {
            type: "prose",
            paragraphs: [
              "Group 1, except for hydrogen, contains the **alkali metals**: lithium, sodium, and potassium. They are soft, shiny metals that react strongly with water. Group 17 contains the **halogens**: fluorine, chlorine, bromine, and iodine. They are reactive nonmetals. Group 18 contains the **noble gases**: helium, neon, argon, krypton, xenon, and radon. They are gases that hardly ever react with anything.",
              "Most elements are metals, which are found on the left and in the middle of the table. Metals are usually shiny, conduct electricity and heat, and can be bent or hammered into shape. Nonmetals are on the right side. A few elements along a diagonal line between them, such as silicon, have properties in between and are called metalloids.",
              "The next two lessons explain why elements in the same group behave alike. It depends on how the electrons in their atoms are arranged."
            ]
          },
          { type: "h", text: "Where the table came from" },
          {
            type: "prose",
            paragraphs: [
              "Dmitri Mendeleev, a Russian chemist, published a periodic table in 1869. He arranged the elements known at the time by atomic mass and put elements with similar properties in the same column. He left gaps where no known element fit and predicted that missing elements would be found. For one gap, he predicted the properties of an element he called eka-aluminium. Gallium was discovered in 1875, and its properties matched his predictions closely.",
              "At the time, nobody knew about protons. In 1913, the physicist Henry Moseley showed that elements should be ordered by atomic number, which is the number of protons, and the table has been ordered that way since."
            ]
          }
        ],
        activity: {
          links: [
            {
              kind: "Watch",
              title: "How the Periodic Table Organizes the Elements",
              source: "American Chemical Society",
              url: "https://www.youtube.com/watch?v=j7JcyDBHCBc",
              note: "A video on periods, groups, and why elements in a column are alike."
            },
            {
              kind: "Try",
              title: "Ptable",
              source: "Michael Dayah",
              url: "https://ptable.com/",
              note: "An interactive periodic table with properties for every element. Use it for the exercises in the next lessons."
            }
          ],
          quiz: [
            {
              q: "Sodium and potassium are in the same group. What should you expect?",
              choices: [
                "They have similar chemical properties.",
                "They have the same atomic number.",
                "They have the same mass."
              ],
              answer: 0,
              why: "Elements in the same group behave alike. Both are soft metals that react strongly with water. Their atomic numbers and masses are different."
            }
          ]
        },
        talk: [
          "Why was it convincing when gallium matched Mendeleev's predictions?",
          "Find sodium, chlorine, and neon on the table. Which groups are they in?"
        ],
        summary: "The periodic table lists the 118 elements by atomic number. Elements in the same column have similar properties. Most elements are metals."
      },
      {
        id: "electron-shells",
        title: "Electron shells",
        tease: "How electrons are arranged around the nucleus.",
        review: [
          "The periodic table lists the elements by atomic number, and elements in the same group behave alike. Group 1 holds reactive metals, group 17 holds reactive nonmetals, and group 18 holds gases that hardly react. The cause is the arrangement of electrons."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "The electrons in an atom are arranged in energy levels, also called **shells**. Electrons in the first shell are closest to the nucleus and have the least energy. Each shell can hold only a certain number of electrons. The first shell holds up to 2. The second holds up to 8. For the first 20 elements, the third shell holds up to 8 as well, and then the fourth shell begins.",
              "Electrons fill the lowest shell first. Hydrogen has 1 electron in the first shell. Helium has 2, which fills it. Lithium has 3 electrons, so 2 go in the first shell and 1 in the second. This continues across the second row until neon, which has 2 in the first shell and 8 in the second."
            ]
          },
          { type: "h", text: "Writing the arrangement" },
          {
            type: "prose",
            paragraphs: [
              "The arrangement is written as numbers for each shell, starting from the inside. Carbon is 2, 4. Nitrogen is 2, 5. Oxygen is 2, 6. Sodium is 2, 8, 1. Chlorine is 2, 8, 7. Argon is 2, 8, 8. Potassium is 2, 8, 8, 1.",
              "The electrons in the outermost shell are called **valence electrons**. These are the electrons that take part in chemical reactions and bonding. Elements in the same group have the same number of valence electrons. Sodium and potassium each have 1. Fluorine and chlorine each have 7. This is why elements in a group behave alike.",
              "Helium (2) and neon (2, 8) have full outer shells. A full outer shell is very stable, which is why the noble gases hardly react."
            ]
          },
          {
            type: "aside",
            title: "About the diagrams",
            text: "The ring diagram is a simplified model, and it is useful for counting electrons. Electrons do not travel around the nucleus in circles like planets. They are better described as clouds, regions where an electron is likely to be found. The next lesson covers this."
          }
        ],
        activity: {
          widget: "shells",
          links: [
            {
              kind: "Try",
              title: "QuantumShell",
              source: "Electron visualizer",
              url: "https://atom.wolfie.gg/",
              note: "Choose an element and see its electrons. The Bohr model view matches the ring diagrams in this lesson."
            },
            {
              kind: "Watch",
              title: "Energy Levels and Electron Configuration",
              source: "FuseSchool",
              url: "https://www.youtube.com/watch?v=vfKF6DEhcos",
              note: "A short video on how electrons fill the shells."
            }
          ],
          quiz: [
            {
              q: "Chlorine has 17 electrons. How are they arranged in shells?",
              choices: ["2, 8, 7", "2, 7, 8", "8, 8, 1"],
              answer: 0,
              why: "The first shell takes 2, the second takes 8, and the 7 that are left go in the third shell. That gives chlorine 7 valence electrons."
            },
            {
              q: "Why do lithium, sodium, and potassium react in similar ways?",
              choices: [
                "They all have one electron in their outer shell.",
                "They all have the same number of shells.",
                "They all have a full outer shell."
              ],
              answer: 0,
              why: "Each has 1 valence electron. They have different numbers of shells, and none of them has a full outer shell."
            }
          ]
        },
        talk: [
          "Pick two elements from the same column of the periodic table. How are their electron arrangements alike?",
          "Why do neon and argon hardly react with other elements?"
        ],
        summary: "Electrons are arranged in shells that hold 2, 8, 8 electrons for the first elements. The outer electrons are valence electrons, and they decide how an element reacts."
      },
      {
        id: "orbitals",
        title: "Orbitals",
        tease: "A closer model of where electrons are found.",
        review: [
          "Electrons are arranged in shells that hold 2, 8, and 8 electrons in the first elements. The electrons in the outermost shell are valence electrons, and atoms in the same group have the same number of them. A full outer shell makes an atom very stable."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "Each shell is divided into smaller regions called **orbitals**. An orbital is a region of space where an electron is likely to be found. Each orbital holds at most 2 electrons, and the two electrons must have opposite spin. Spin is a property of electrons with two possible values, usually called up and down.",
              "Orbitals come in different shapes, named with letters. An **s orbital** is a sphere around the nucleus. A **p orbital** is shaped like a dumbbell with two lobes. A **d orbital** has a more complex shape. The first shell has one s orbital, which is why it holds 2 electrons. The second shell has one s orbital and three p orbitals, which is 4 orbitals and 8 electrons. The third shell has one s, three p, and five d orbitals, which is 9 orbitals and 18 electrons."
            ]
          },
          { type: "h", text: "Filling the orbitals" },
          {
            type: "prose",
            paragraphs: [
              "Electrons fill the lowest-energy orbitals first. When several orbitals have the same energy, such as the three p orbitals, each one gets a single electron before any gets a second. This is Hund's rule.",
              "Nitrogen has 7 electrons. Two fill the 1s orbital. Two fill the 2s orbital. The last three go one each into the three 2p orbitals. Those three unpaired electrons are the ones nitrogen shares when it bonds, which is why nitrogen usually makes three bonds. Oxygen has one more electron, so one of its p orbitals holds a pair and two hold single electrons. Oxygen usually makes two bonds. A pair of electrons that is not used in a bond is called a **lone pair**.",
              "The shells do not fill strictly in order. The 4s orbital has lower energy than the 3d orbitals, so it fills first. This is why potassium, with 19 electrons, is 2, 8, 8, 1 and calcium is 2, 8, 8, 2. The 3d orbitals fill afterward, starting with scandium. These elements, from scandium to zinc, are the transition metals in the middle of the periodic table."
            ]
          },
          {
            type: "aside",
            title: "Why the ring model still works",
            text: "For the first 20 elements, the 2, 8, 8 counting rule gives the right number of valence electrons. The orbital model explains why those numbers are what they are and why the pattern changes for heavier elements."
          }
        ],
        activity: {
          links: [
            {
              kind: "Watch",
              title: "Shells, subshells, and orbitals",
              source: "Khan Academy",
              url: "https://www.youtube.com/watch?v=26PF9Ctch9Y",
              note: "A more advanced video, written for high school chemistry. It covers the same ideas in more detail."
            },
            {
              kind: "Try",
              title: "QuantumShell",
              source: "Electron visualizer",
              url: "https://atom.wolfie.gg/",
              note: "Look at the orbital view for an element such as nitrogen or oxygen."
            }
          ],
          quiz: [
            {
              q: "How many electrons can one orbital hold?",
              choices: ["1", "2", "8"],
              answer: 1,
              why: "An orbital holds at most 2 electrons, and they must have opposite spins. A shell holds more because it contains several orbitals."
            },
            {
              q: "Nitrogen has three unpaired electrons in its 2p orbitals. How many bonds does nitrogen usually form?",
              choices: ["1", "3", "5"],
              answer: 1,
              why: "Each unpaired electron can be shared in a bond. Ammonia, NH₃, has nitrogen bonded to three hydrogen atoms."
            }
          ]
        },
        talk: [
          "Why does an s orbital hold 2 electrons while the three p orbitals together hold 6?",
          "Oxygen has two unpaired electrons. How many bonds do you expect it to make?"
        ],
        summary: "Shells are made of orbitals, and each orbital holds up to two electrons. Unpaired electrons are the ones that make bonds. The 4s orbital fills before the 3d orbitals."
      },
      {
        id: "ions",
        title: "Ions",
        tease: "What happens when an atom gains or loses electrons.",
        review: [
          "Each shell is made of orbitals, and each orbital holds at most two electrons. Electrons fill the lowest-energy orbitals first, and the 4s orbital fills before the 3d orbitals. Unpaired electrons are the ones that atoms use to make bonds."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "An **ion** is an atom, or a group of atoms, that has an electric charge. An atom becomes an ion when its number of electrons is different from its number of protons. In ordinary chemical reactions the nucleus does not change, so the number of protons stays the same. Only electrons move.",
              "An atom that loses electrons has more protons than electrons, so it is positive. It is called a **cation**. An atom that gains electrons has more electrons than protons, so it is negative. It is called an **anion**."
            ]
          },
          { type: "h", text: "Sodium and chlorine" },
          {
            type: "prose",
            paragraphs: [
              "A sodium atom has 11 protons and 11 electrons, arranged 2, 8, 1. If it loses its one outer electron, it has 11 protons and 10 electrons. The charge is +1, and the ion is written Na⁺. Its electrons are now arranged 2, 8, the same as neon, with a full outer shell.",
              "A chlorine atom has 17 protons and 17 electrons, arranged 2, 8, 7. If it gains one electron, it has 17 protons and 18 electrons. The charge is -1, and the ion is written Cl⁻. Its electrons are now arranged 2, 8, 8, the same as argon.",
              "An ion is still the same element. Na⁺ has 11 protons, so it is still sodium, but its chemical behavior is very different from a sodium atom. Sodium metal reacts violently with water. Sodium ions dissolved in seawater do not."
            ]
          },
          { type: "h", text: "Which atoms form which ions" },
          {
            type: "prose",
            paragraphs: [
              "Metals tend to lose their outer electrons and form cations. Nonmetals tend to gain electrons and form anions. Atoms usually form the ion that gives them a full outer shell, because that arrangement is especially stable.",
              "Group 1 elements form ions with a +1 charge, such as Li⁺, Na⁺, and K⁺. Group 2 elements form +2 ions, such as Mg²⁺ and Ca²⁺. Aluminum forms Al³⁺. Group 16 elements form -2 ions, such as O²⁻ and S²⁻. Group 17 elements form -1 ions, such as F⁻ and Cl⁻. Elements near the middle of the table, such as carbon, are not likely to gain or lose four electrons, so they mostly share electrons instead. The lessons on bonds explain this."
            ]
          }
        ],
        activity: {
          widget: "ions",
          links: [
            {
              kind: "Watch",
              title: "What Are Ions?",
              source: "FuseSchool",
              url: "https://www.youtube.com/watch?v=900dXBWgx3Y",
              note: "A short video on how atoms become ions."
            },
            {
              kind: "Try",
              title: "Build an Atom",
              source: "PhET · University of Colorado",
              url: "https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_en.html",
              note: "Add or remove electrons from an atom and watch the charge change."
            }
          ],
          quiz: [
            {
              q: "A magnesium atom has 12 protons. It loses 2 electrons. What is the result?",
              choices: [
                "Mg²⁺, with 12 protons and 10 electrons",
                "Mg²⁻, with 12 protons and 14 electrons",
                "Ne, which is a different element"
              ],
              answer: 0,
              why: "Losing two electrons leaves 12 protons and 10 electrons, so the charge is +2. It is still magnesium, because the number of protons did not change."
            },
            {
              q: "Why is an oxygen ion written O²⁻?",
              choices: [
                "It has gained two electrons.",
                "It has lost two electrons.",
                "It has two extra protons."
              ],
              answer: 0,
              why: "Oxygen has 6 valence electrons. Gaining 2 gives it 8, a full outer shell, and a charge of -2."
            }
          ]
        },
        talk: [
          "Why is a sodium ion so different from a sodium atom, even though both have 11 protons?",
          "Predict the charge of the ion that calcium forms, and of the ion that sulfur forms. Explain your answer using valence electrons."
        ],
        summary: "An ion is a charged atom. Losing electrons makes a positive ion, and gaining electrons makes a negative ion. Atoms usually form the ion that gives them a full outer shell."
      },
      {
        id: "ionic-bonds",
        title: "Ionic bonds",
        tease: "How oppositely charged ions hold together to form salts.",
        review: [
          "An ion is an atom with an electric charge. Atoms lose or gain electrons, never protons, to form ions. Metals usually form positive ions and nonmetals usually form negative ions. Sodium becomes Na⁺ and chlorine becomes Cl⁻."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "An **ionic bond** is the attraction between oppositely charged ions. When a sodium atom gives an electron to a chlorine atom, the result is a Na⁺ ion and a Cl⁻ ion. Opposite charges attract, so the two ions pull toward each other and hold together.",
              "The electron transfer by itself costs energy, because it takes energy to remove an electron from sodium. The reaction happens because the ions then pack together tightly, and the attraction between them releases more energy than the transfer used. The total energy goes down. This is a more accurate explanation than saying that atoms \"want\" full shells."
            ]
          },
          { type: "h", text: "Crystals" },
          {
            type: "prose",
            paragraphs: [
              "Table salt is not made of separate pairs of ions. It is a **crystal**. Each Na⁺ ion is surrounded by six Cl⁻ ions, and each Cl⁻ ion is surrounded by six Na⁺ ions. This pattern repeats in all directions as a cubic grid, called a lattice. A grain of salt holds an enormous number of ions in one lattice. The formula NaCl shows the ratio of the ions, which is one sodium to one chlorine.",
              "Compounds made of ions are called **ionic compounds**. They usually form crystals that are hard but brittle, and they have high melting points. Sodium chloride melts at 801 °C. Solid ionic compounds do not conduct electricity, because the ions are locked in place."
            ]
          },
          { type: "h", text: "Formulas" },
          {
            type: "prose",
            paragraphs: [
              "An ionic compound has no overall charge, so the positive and negative charges must add up to zero. Sodium chloride is NaCl because Na⁺ and Cl⁻ cancel one to one. Calcium forms Ca²⁺, so it needs two Cl⁻ ions, and the formula is CaCl₂. Magnesium oxide is MgO, because Mg²⁺ and O²⁻ cancel. Aluminum oxide is Al₂O₃, because two Al³⁺ ions give +6 and three O²⁻ ions give -6."
            ]
          }
        ],
        activity: {
          widget: "ionic",
          links: [
            {
              kind: "Watch",
              title: "Types of Chemical Bonds",
              source: "Whats Up Dude",
              url: "https://www.youtube.com/watch?v=AE5QcL4VfH4",
              note: "A video on ionic and covalent bonds that shows the electron shells of sodium and chlorine."
            },
            {
              kind: "Try",
              title: "Ionic Bond in Sodium Chloride",
              source: "Middle School Chemistry · American Chemical Society",
              url: "https://www.acs.org/middleschoolchemistry/simulations/chapter4/lesson5.html",
              note: "Simulations of electron transfer between sodium and chlorine, and between calcium and chlorine."
            },
            {
              kind: "Read",
              title: "Ionic bonds",
              source: "Khan Academy",
              url: "https://www.khanacademy.org/science/chemistry/chemical-bonds/types-of-bonds/a/ionic-bonds",
              note: "An article and video on how ionic bonds form."
            }
          ],
          quiz: [
            {
              q: "Why is calcium chloride written CaCl₂?",
              choices: [
                "Calcium forms Ca²⁺, and each Cl⁻ cancels only one of the two positive charges.",
                "Chlorine atoms always travel in pairs.",
                "Calcium has two neutrons."
              ],
              answer: 0,
              why: "The charges in a compound must add up to zero. One Ca²⁺ needs two Cl⁻ ions."
            }
          ]
        },
        talk: [
          "Why does solid salt not conduct electricity?",
          "Use the builder above to find the formula for potassium sulfide. Check that the charges add up to zero."
        ],
        summary: "An ionic bond is the attraction between positive and negative ions. Ionic compounds form crystal lattices, and their formulas show the ratio of ions that makes the charges cancel."
      },
      {
        id: "covalent-bonds",
        title: "Covalent bonds",
        tease: "How atoms share electrons to form molecules.",
        review: [
          "Ionic bonds are the attraction between positive and negative ions. Sodium chloride is a crystal lattice with a 1 to 1 ratio of Na⁺ to Cl⁻. The charges in an ionic compound add up to zero, which is why calcium chloride is CaCl₂."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "In a **covalent bond**, two atoms share a pair of electrons. This happens between nonmetal atoms, which all tend to attract electrons and do not give them up easily. The shared electrons are attracted to both nuclei at once, and that attraction holds the atoms together.",
              "A group of atoms joined by covalent bonds is a **molecule**. Hydrogen gas is made of H₂ molecules. Each hydrogen atom has one electron, and the two atoms share a pair, so each atom has two electrons near it, like helium. A shared pair is drawn as a line between the atoms: H-H."
            ]
          },
          { type: "h", text: "Single, double, and triple bonds" },
          {
            type: "prose",
            paragraphs: [
              "Atoms can share more than one pair. A bond with one shared pair is a single bond. Two shared pairs make a double bond, as in oxygen gas, O=O. Three shared pairs make a triple bond, as in nitrogen gas, N≡N. More shared pairs mean a shorter and stronger bond. The triple bond in nitrogen is very strong, which is why nitrogen gas, which makes up 78 percent of air, hardly reacts.",
              "The number of bonds an atom usually makes equals the number of electrons it needs to fill its outer shell. Hydrogen makes 1 bond, oxygen makes 2, nitrogen makes 3, and carbon makes 4."
            ]
          },
          { type: "h", text: "Examples" },
          {
            type: "prose",
            paragraphs: [
              "In water, H₂O, the oxygen atom bonds to two hydrogen atoms. Oxygen has 6 valence electrons, so it shares two of them in bonds and keeps the other four as two lone pairs. In methane, CH₄, carbon bonds to four hydrogen atoms. In ammonia, NH₃, nitrogen bonds to three hydrogen atoms and has one lone pair. In carbon dioxide, CO₂, carbon forms a double bond with each oxygen atom: O=C=O.",
              "Covalent substances are usually made of separate molecules. The attractions between molecules are much weaker than the bonds inside them, so covalent compounds tend to have low melting and boiling points. Water melts at 0 °C and boils at 100 °C. Compare that with sodium chloride, which melts at 801 °C."
            ]
          }
        ],
        activity: {
          links: [
            {
              kind: "Watch",
              title: "How atoms bond",
              source: "TED-Ed",
              url: "https://www.youtube.com/watch?v=NgD9yHSJ29I",
              note: "A video that covers ionic and covalent bonds and how atoms fill their outer shells."
            },
            {
              kind: "Watch",
              title: "Covalent Bonding of Hydrogen, Oxygen, and Nitrogen",
              source: "FuseSchool",
              url: "https://www.youtube.com/watch?v=0HfN3CvXP2M",
              note: "Diagrams of shared electrons in H₂, O₂, and N₂."
            },
            {
              kind: "Try",
              title: "MolView",
              source: "Molecule viewer and builder",
              url: "https://molview.org/",
              note: "Search for water, methane, or carbon dioxide and rotate the molecule in 3D."
            }
          ],
          quiz: [
            {
              q: "How many bonds does carbon usually make?",
              choices: ["2", "4", "6"],
              answer: 1,
              why: "Carbon has 4 valence electrons and needs 4 more to fill its outer shell, so it usually makes 4 bonds. In methane, CH₄, it makes four single bonds."
            },
            {
              q: "What is the main difference between an ionic bond and a covalent bond?",
              choices: [
                "Ionic bonds attract ions of opposite charge, and covalent bonds share electrons.",
                "Ionic bonds are made of neutrons, and covalent bonds are made of protons.",
                "Covalent bonds are only found in metals."
              ],
              answer: 0,
              why: "In an ionic bond, electrons are transferred to make ions. In a covalent bond, atoms share electron pairs. Neutrons and protons stay in the nucleus in both cases."
            }
          ]
        },
        talk: [
          "Draw the bonds in a water molecule and a carbon dioxide molecule. How many lone pairs does each atom have?",
          "Why do covalent compounds such as water melt at much lower temperatures than ionic compounds such as salt?"
        ],
        summary: "A covalent bond is a shared pair of electrons. Atoms joined by covalent bonds form molecules. Hydrogen makes 1 bond, oxygen 2, nitrogen 3, and carbon 4."
      },
      {
        id: "polar-bonds",
        title: "Electronegativity and polar bonds",
        tease: "Why electrons are not always shared equally.",
        review: [
          "A covalent bond is a pair of electrons shared by two atoms. Atoms joined this way form molecules, such as H₂O, CH₄, and CO₂. Hydrogen usually makes 1 bond, oxygen 2, nitrogen 3, and carbon 4."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "In many covalent bonds, one atom pulls on the shared electrons harder than the other does. **Electronegativity** measures how strongly an atom attracts the electrons in a bond. Approximate values on the Pauling scale are: fluorine 4.0, oxygen 3.4, chlorine 3.2, nitrogen 3.0, carbon 2.6, hydrogen 2.2, and sodium 0.9. Electronegativity generally increases toward the top right of the periodic table, leaving out the noble gases.",
              "If two atoms have the same electronegativity, as in H-H or O=O, they share the electrons equally. This is a **nonpolar** bond. If the atoms have different electronegativities, the shared electrons spend more time near the stronger atom. That atom gets a small negative charge, written δ⁻, and the other atom gets a small positive charge, written δ⁺. This is a **polar** bond."
            ]
          },
          { type: "h", text: "Water" },
          {
            type: "prose",
            paragraphs: [
              "Each O-H bond in water is polar. Oxygen (3.4) pulls the electrons harder than hydrogen (2.2) does, so the oxygen end is slightly negative and each hydrogen end is slightly positive. The charges are partial. They are much smaller than the full charges on ions.",
              "Carbon and hydrogen (2.6 and 2.2) are close in electronegativity, so C-H bonds are only slightly polar. They are usually treated as nonpolar. That is one reason oils and fats, which are mostly carbon and hydrogen, behave so differently from water."
            ]
          },
          { type: "h", text: "A range, not two types" },
          {
            type: "prose",
            paragraphs: [
              "Bonds fall on a range between equal sharing and complete transfer. Sodium (0.9) and chlorine (3.2) differ by 2.3, which is large enough that the electron is effectively transferred and the bond is ionic. As a rough guide, a difference below about 0.4 gives a nonpolar bond, a difference between about 0.4 and 1.7 gives a polar covalent bond, and a larger difference gives an ionic bond. These cutoffs are approximate, and real bonds do not change type at a sharp line."
            ]
          }
        ],
        activity: {
          links: [
            {
              kind: "Try",
              title: "Molecule Polarity",
              source: "PhET · University of Colorado",
              url: "https://phet.colorado.edu/sims/html/molecule-polarity/latest/molecule-polarity_en.html",
              note: "Change the electronegativity of two atoms and watch the shared electrons and the partial charges change."
            },
            {
              kind: "Watch",
              title: "How polarity makes water behave strangely",
              source: "TED-Ed",
              url: "https://www.youtube.com/watch?v=ASLUY2U1M-8",
              note: "A video on polar molecules and what polarity does to the way water behaves."
            }
          ],
          quiz: [
            {
              q: "In a bond between hydrogen (2.2) and chlorine (3.2), which atom has the partial negative charge?",
              choices: ["Hydrogen", "Chlorine", "Neither, because the bond is nonpolar"],
              answer: 1,
              why: "Chlorine has the higher electronegativity, so the shared electrons spend more time near it. Chlorine is δ⁻ and hydrogen is δ⁺."
            }
          ]
        },
        talk: [
          "Why is the bond between two oxygen atoms in O₂ nonpolar?",
          "Why do we describe bonds as a range from nonpolar to ionic, not as two separate types?"
        ],
        summary: "Electronegativity is how strongly an atom attracts bonding electrons. A difference in electronegativity makes a polar bond, with partial charges on the two atoms. A very large difference makes an ionic bond."
      },
      {
        id: "molecular-shapes",
        title: "Molecular shapes",
        tease: "How the arrangement of bonds sets a molecule's shape and polarity.",
        review: [
          "Electronegativity measures how strongly an atom attracts the electrons in a bond. When two atoms differ, the bond is polar, with a partial negative charge on the stronger atom. Oxygen is more electronegative than hydrogen, so each O-H bond in water is polar."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "A molecule has a three-dimensional shape. The shape depends on how the groups of electrons around the central atom are arranged. Electrons repel each other because they are all negative, so the groups spread out as far apart as they can. This method for predicting shape is called VSEPR, which stands for valence shell electron pair repulsion.",
              "To use it, count the **electron groups** around the central atom. Each lone pair counts as one group. Each bond counts as one group, whether it is single, double, or triple."
            ]
          },
          { type: "h", text: "Common shapes" },
          {
            type: "prose",
            paragraphs: [
              "With 2 groups, the shape is **linear**, with a 180° angle. In CO₂ the carbon has two double bonds and no lone pairs, so the molecule is a straight line. With 3 groups, the shape is **trigonal planar**, with 120° angles, as in BF₃. With 4 groups, the groups point to the corners of a tetrahedron, with angles of 109.5°.",
              "Methane, CH₄, has 4 bonds and no lone pairs, so it is **tetrahedral**. Ammonia, NH₃, has 3 bonds and 1 lone pair. The atoms form a pyramid, called **trigonal pyramidal**, with angles of about 107°. Water has 2 bonds and 2 lone pairs, so the atoms form a **bent** shape with an angle of about 104.5°. A lone pair takes up more room than a bonding pair, so the lone pairs squeeze the bonds closer together than the tetrahedral angle."
            ]
          },
          { type: "h", text: "Shape and polarity" },
          {
            type: "prose",
            paragraphs: [
              "A molecule with polar bonds is not always a polar molecule. In CO₂, the two C=O bonds are polar, but they point in opposite directions and their effects cancel. The molecule as a whole is nonpolar. In water, the two O-H bonds are polar and the molecule is bent, so they do not cancel. The oxygen side of the molecule is negative and the hydrogen side is positive, which makes water a polar molecule. Methane is symmetric and nonpolar. Ammonia is polar.",
              "This matters for what molecules do. Polar molecules attract each other and attract ions, and the next lessons show how that affects dissolving."
            ]
          }
        ],
        activity: {
          links: [
            {
              kind: "Try",
              title: "Molecule Shapes",
              source: "PhET · University of Colorado",
              url: "https://phet.colorado.edu/sims/html/molecule-shapes/latest/molecule-shapes_en.html",
              note: "Add bonds and lone pairs around a central atom and see how the shape and angles change."
            },
            {
              kind: "Try",
              title: "MolView",
              source: "Molecule viewer and builder",
              url: "https://molview.org/",
              note: "Look up water, ammonia, methane, and carbon dioxide and compare their shapes."
            }
          ],
          quiz: [
            {
              q: "Water has two bonds and two lone pairs on oxygen. What is its shape?",
              choices: ["Linear", "Bent", "Tetrahedral"],
              answer: 1,
              why: "The four electron groups point to the corners of a tetrahedron, but only two of them are bonds to atoms. The lone pairs are not counted when naming the shape of the atoms, so the shape is bent."
            },
            {
              q: "Why is CO₂ nonpolar even though its C=O bonds are polar?",
              choices: [
                "The molecule is linear, so the two bond effects cancel.",
                "Carbon and oxygen have the same electronegativity.",
                "The bonds are ionic."
              ],
              answer: 0,
              why: "The two polar bonds point in opposite directions, so the molecule has no overall positive or negative side."
            }
          ]
        },
        talk: [
          "How many electron groups does the central atom in ammonia have, and what shape do the four atoms make?",
          "Why is water polar, but carbon dioxide is not?"
        ],
        summary: "Electron groups spread out to stay as far apart as possible, and this sets the shape of a molecule. A molecule is polar only if its polar bonds do not cancel."
      },
      {
        id: "dissolving",
        title: "Dissolving in water",
        tease: "Why salt and sugar dissolve, and why oil does not.",
        review: [
          "The shape of a molecule depends on the groups of electrons around the central atom, which spread out to stay far apart. Methane is tetrahedral, ammonia is a pyramid, and water is bent. A molecule is polar if its polar bonds do not cancel, so water is polar and carbon dioxide is not."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "A **solution** is a mixture in which one substance, the solute, is spread evenly through another, the solvent. In salt water, the salt is the solute and the water is the solvent. The lessons on polar bonds and shapes showed that a water molecule is polar, with a slightly negative oxygen side and slightly positive hydrogen sides."
            ]
          },
          { type: "h", text: "Salt" },
          {
            type: "prose",
            paragraphs: [
              "When salt is placed in water, water molecules are attracted to the ions on the surface of the crystal. The oxygen sides of the water molecules point toward the Na⁺ ions, and the hydrogen sides point toward the Cl⁻ ions. The attraction is strong enough to pull the ions out of the lattice. Water molecules surround each ion, and the ions spread through the water. The result is separate Na⁺ and Cl⁻ ions, not NaCl molecules.",
              "Not all ionic compounds dissolve well. Calcium carbonate, the main material in chalk and limestone, dissolves only in very small amounts. Its ions attract each other more strongly than water molecules attract them."
            ]
          },
          { type: "h", text: "Sugar" },
          {
            type: "prose",
            paragraphs: [
              "Table sugar, sucrose (C₁₂H₂₂O₁₁), is made of covalent molecules with many O-H groups. These groups are polar, and they attract water molecules through hydrogen bonds. A **hydrogen bond** is an attraction between a slightly positive hydrogen atom on one molecule and a slightly negative oxygen or nitrogen atom on another. It is much weaker than a covalent bond, but there are many of them. Water molecules pull sugar molecules apart from each other and surround them. Sugar dissolves as whole molecules, and no ions are made.",
              "Hydrogen bonds also hold the two strands of DNA together and hold water molecules to each other."
            ]
          },
          { type: "h", text: "Oil" },
          {
            type: "prose",
            paragraphs: [
              "Oil is made of molecules that contain mostly carbon and hydrogen, with nonpolar bonds. Oil molecules have no charges for water to attract. Water molecules attract each other more strongly than they attract oil, so the oil is pushed aside and floats on top. A general rule is that polar and ionic substances dissolve in polar solvents such as water, and nonpolar substances dissolve in nonpolar solvents such as hexane."
            ]
          }
        ],
        activity: {
          links: [
            {
              kind: "Try",
              title: "Sugar and Salt Solutions",
              source: "PhET · University of Colorado",
              url: "https://phet.colorado.edu/en/simulations/sugar-and-salt-solutions",
              note: "Add salt or sugar to water and watch what happens to the ions and molecules. The Micro tab shows them dissolving."
            },
            {
              kind: "Watch",
              title: "Water and Solutions",
              source: "Crash Course Chemistry",
              url: "https://www.youtube.com/watch?v=AN4KifV12DA",
              note: "A longer video on water as a solvent and how solutions are described."
            }
          ],
          quiz: [
            {
              q: "What is in a glass of salt water?",
              choices: [
                "Na⁺ and Cl⁻ ions surrounded by water molecules",
                "NaCl molecules floating in water",
                "Sodium atoms and chlorine atoms"
              ],
              answer: 0,
              why: "The water molecules pull the ions out of the crystal, so the ions are separate and spread through the water."
            },
            {
              q: "Why does oil not dissolve in water?",
              choices: [
                "Oil is nonpolar, and water molecules attract each other more than they attract oil.",
                "Oil is heavier than water.",
                "Oil is made of ions."
              ],
              answer: 0,
              why: "Oil molecules have nonpolar bonds, so water has nothing to attract. Oil floats because it is less dense than water, but density is not the reason it fails to dissolve."
            }
          ]
        },
        talk: [
          "How is dissolving salt different from dissolving sugar at the level of particles?",
          "Why does water attract Na⁺ ions with its oxygen side and Cl⁻ ions with its hydrogen side?"
        ],
        summary: "Water is polar, so it can pull ions out of a salt crystal and attract the polar groups in sugar. Salt dissolves as ions and sugar dissolves as molecules. Nonpolar substances such as oil do not dissolve in water."
      },
      {
        id: "conductivity",
        title: "Conductivity of solutions",
        tease: "Why salt water conducts electricity and sugar water does not.",
        review: [
          "Water is polar, so it can dissolve ionic compounds and polar molecules. Salt dissolves as separate Na⁺ and Cl⁻ ions. Sugar dissolves as whole molecules and makes no ions. Nonpolar substances such as oil do not dissolve in water."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "Electric current is a flow of electric charge. In a metal wire, the charge is carried by electrons. In a solution, it is carried by ions. A solution with no ions has no charged particles that are free to move, so it does not conduct electricity well.",
              "Salt water conducts electricity because it contains Na⁺ and Cl⁻ ions that can move. Sugar water does not conduct, because the sugar dissolves as neutral molecules. Pure water conducts very poorly. Only a tiny fraction of its molecules are split into ions. Tap water conducts better than pure water because of the minerals dissolved in it.",
              "A substance that makes a conducting solution when it dissolves is called an **electrolyte**. Salts such as sodium chloride and acids such as hydrochloric acid are electrolytes. Sugar is a nonelectrolyte. Solid salt does not conduct because the ions are locked in the lattice. Melted salt does conduct, because the ions are free to move."
            ]
          },
          { type: "h", text: "What happens at the electrodes" },
          {
            type: "prose",
            paragraphs: [
              "To test conductivity, two metal electrodes are placed in the solution and connected to a battery or a light bulb. The positive ions move toward the negative electrode, and the negative ions move toward the positive electrode.",
              "The electrons in the wires do not pass through the water. Instead, chemical reactions happen at the surface of each electrode. At the negative electrode, electrons from the wire are given to something in the solution. At the positive electrode, electrons are taken from something in the solution and sent into the wire. In salt water, hydrogen gas forms at the negative electrode, and chlorine gas can form at the positive electrode. This is called electrolysis.",
              "These reactions are what keep the current going. Without them, ions would collect at the electrodes, and their charge would oppose the current until it stopped."
            ]
          },
          {
            type: "aside",
            title: "Safety",
            text: "Do not try electrolysis of salt water at home. Chlorine gas is toxic."
          }
        ],
        activity: {
          links: [
            {
              kind: "Watch",
              title: "Why does salt solution conduct electricity but sugar solution doesn't?",
              source: "MASTERCHEM",
              url: "https://www.youtube.com/watch?v=zvTRCELULyA",
              note: "A video that explains conductivity in terms of the particles in each solution."
            },
            {
              kind: "Try",
              title: "Sugar and Salt Solutions",
              source: "PhET · University of Colorado",
              url: "https://phet.colorado.edu/en/simulations/sugar-and-salt-solutions",
              note: "Use the conductivity tester with salt, sugar, and water."
            }
          ],
          quiz: [
            {
              q: "Why does sugar water not conduct electricity?",
              choices: [
                "It contains no ions or other free charged particles.",
                "Sugar is too heavy to move.",
                "Sugar molecules block the electrodes."
              ],
              answer: 0,
              why: "Sugar dissolves as neutral molecules. With no free charges, the solution cannot carry a current."
            }
          ]
        },
        talk: [
          "Why does solid salt not conduct electricity, while melted salt and salt water do?",
          "What would happen to the current if there were no reactions at the electrodes?"
        ],
        summary: "Solutions conduct electricity when they contain ions that can move. Salt water does, and sugar water does not. A steady current also needs chemical reactions at the electrodes."
      },
      {
        id: "electric-current",
        title: "Electric current in wires",
        tease: "How electrons move in a metal wire, and how fast.",
        review: [
          "A solution conducts electricity when it contains ions that are free to move. Salt water conducts because of its Na⁺ and Cl⁻ ions, and sugar water does not. A steady current in a solution needs reactions at the electrodes."
        ],
        body: [
          {
            type: "prose",
            paragraphs: [
              "In a metal wire, the charge carriers are electrons. A metal has outer electrons that are not tied to a single atom. They can move through the metal, and they are called free electrons. A metal such as copper has about 10²³ free electrons in every cubic centimeter.",
              "A battery does not supply the electrons that flow in a circuit. The wire is already full of electrons. The battery provides an electric field that pushes them around the circuit, and it provides the energy."
            ]
          },
          { type: "h", text: "Three different speeds" },
          {
            type: "prose",
            paragraphs: [
              "The electrons in a wire move in three different ways. First, they have a **drift speed**, which is their average speed along the wire. It is very slow. In a copper wire with a cross-section of 1 square millimeter that carries 1 ampere, the drift speed is about 0.07 millimeters per second. At that speed, an electron would take almost 4 hours to travel 1 meter.",
              "Second, the electrons also move randomly in all directions at a very high speed, about 1,000 kilometers per second in copper. These movements cancel out, so they do not make a current by themselves.",
              "Third, the **electric signal** travels along the wire at a large fraction of the speed of light, between roughly 50 and 99 percent depending on the type of wire. When a switch is closed, an electric field spreads along the wire at this speed, and free electrons everywhere in the circuit start to drift almost at once. This is why a light turns on right away, even though no single electron travels from the switch to the bulb that fast.",
              "In the alternating current used in houses, the electrons move back and forth about 60 times per second in the United States. They hardly move along the wire at all, but they still deliver energy."
            ]
          }
        ],
        activity: {
          links: [
            {
              kind: "Watch",
              title: "Does Electricity Move Instantly?",
              source: "What the Physics?! · NOVA PBS",
              url: "https://www.youtube.com/watch?v=Scs_Y65Ve2c",
              note: "A video on how fast electricity moves through wires and why the light turns on right away."
            }
          ],
          quiz: [
            {
              q: "A light turns on right when you flip the switch. Why?",
              choices: [
                "Electrons travel from the switch to the bulb at nearly the speed of light.",
                "The wire already contains electrons, and the electric field that moves them spreads at nearly the speed of light.",
                "The battery sends a fresh supply of electrons through the wire."
              ],
              answer: 1,
              why: "The electrons in the wire start to drift together when the field arrives. Each electron drifts slowly, but the field travels very fast."
            }
          ]
        },
        talk: [
          "Why can the signal travel at nearly the speed of light while each electron drifts at less than a millimeter per second?",
          "What do the conductivity of salt water and the current in a wire have in common, and how are they different?"
        ],
        summary: "Electrons in a wire drift slowly, but the electric field that moves them travels at a large fraction of the speed of light. A battery supplies energy and does not supply the electrons."
      }
    ]
  });
})();
