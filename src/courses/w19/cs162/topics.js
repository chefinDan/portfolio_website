const topics = [
  {
    title: 'Course Intro',
    weeks: [ 1 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1dWX-4PeCH2DFqYUj_Rqj5MtIRfZMiG8tDLd3-ZIRtRw/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'What is Object-Oriented Programming?',
        link: 'https://medium.com/learn-how-to-program/chapter-3-what-is-object-oriented-programming-d0a6ec0a7615',
        description: 'Richard Kenneth Eng (Chapter 3 of "Learn How To Program" on Medium)'
      },
      {
        title: 'How to explain object-oriented programming concepts to a 6-year-old',
        link: 'https://medium.freecodecamp.org/object-oriented-programming-concepts-21bb035f7260',
        description: 'Alexander Petkov (on Medium\'s freeCodeCamp)'
      }
    ]
  },

  {
    title: 'Git and GitHub',
    weeks: [ 1 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1lBaJnhL_lQZEFht7syMCOzpM-up6DWKrsNV7NwW5Cp8/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'Chapters 1 and 2',
        link: 'https://git-scm.com/book/en/v2',
        description: 'Pro Git'
      }
    ]
  },

  {
    title: 'Review: Pointers, Arrays, and Structs',
    weeks: [ 1 ],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1rc4tvvVOSXMGjdVDBgNT0tlQ-KJFOoY5nZ6t1kd7r8I/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/OSU-CS162-W19/cpp-review',
        description: 'code written in lecture'
      }
    ],
    readings: [
      {
        title: 'Chapter 6 (Arrays, Strings, Pointers, and References)',
        link: 'http://www.learncpp.com/#Chapter6',
        description: 'LearnCpp.com'
      }
    ]
  },

  {
    title: 'File I/O',
    weeks: [ 2, 3 ],
    isCurrent: true,
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1hWYCUBf9NL80O6PK-oH7sA0zMFEd8A3F8SAODc_0f9U/edit?usp=sharing'
      },
      {
        title: 'Example code',
        link: 'https://github.com/OSU-CS162-W19/file-io'
      }
    ],
    readings: [
      {
        title: 'Input/output with files',
        link: 'http://www.cplusplus.com/doc/tutorial/files/',
        description: 'cplusplus.com'
      },
      {
        title: '18.6 - Basic file I/O',
        link: 'http://www.learncpp.com/cpp-tutorial/186-basic-file-io/',
        description: 'LearnCpp.com'
      }
    ]
  },

  {
    title: 'Separation of Files, Compilation, and Make',
    weeks: [ 3 ],
    isCurrent: true,
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/16rDDHrqcnR1O4ID7Ji9J8NAsZErkByxgg1QjVvsGLdA/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: '1.9 - Header files',
        link: 'http://www.learncpp.com/cpp-tutorial/19-header-files/',
        description: 'LearnCpp.com'
      },
      {
        title: '1.10 - A first look at the preprocessor',
        link: 'http://www.learncpp.com/cpp-tutorial/110-a-first-look-at-the-preprocessor/',
        description: 'LearnCpp.com'
      },
      {
        title: '1.10a - Header guards',
        link: 'http://www.learncpp.com/cpp-tutorial/1-10a-header-guards/',
        description: 'LearnCpp.com'
      },
      {
        title: 'Makefiles: A tutorial by example',
        link: 'http://mrbook.org/blog/tutorials/make/',
        description: 'Mrbook'
      }
    ]
  },

  {
    title: 'Classes',
    weeks: [ 3, 4 ],
    isCurrent: true,
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1pDGAfxSOaQd7-D0oC57t2-2M8a0q9aForxqDCzUbj8E/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'Chapter 8 (Basic object-oriented programming)',
        link: 'http://www.learncpp.com/#Chapter8',
        description: 'LearnCpp.com'
      },
      {
        title: 'Classes',
        link: 'http://www.cplusplus.com/doc/tutorial/classes/',
        description: 'cplusplus.com'
      }
    ]
  }
];

// var calendar = [
//
//   {
//     week: 4,
//     sections: [
//       {
//         heading: 'Topics',
//         entriesHTML: [
//           'Classes &ndash; <a href="https://docs.google.com/document/d/1pDGAfxSOaQd7-D0oC57t2-2M8a0q9aForxqDCzUbj8E/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS162-W18/class-basics">example code</a>',
//           'Object Composition &ndash; <a href="https://github.com/OSU-CS162-W18/object-composition">example code</a>'
//         ]
//       },
//       {
//         heading: 'Readings',
//         entriesHTML: [
//           '<a href="http://www.learncpp.com/#Chapter8">Chapter 8 (Basic object-oriented programming)</a> &ndash; LearnCpp.com',
//           '<a href="http://www.cplusplus.com/doc/tutorial/classes/">Classes</a> &ndash; cplusplus.com',
//           '<a href="http://www.learncpp.com/cpp-tutorial/102-composition/">10.2 - Composition</a> &ndash; LearnCpp.com'
//         ]
//       }
//     ]
//   },
//
//   {
//     week: 5,
//     sections: [
//       {
//         heading: 'First Exam',
//         entriesHTML: [
//           'Our first exam will be this Wednesday at our normal lecture location and time.',
//           'The exam will cover everything we\'ve talked about so far in lecture, through classes and object composition.',
//           '<a href="https://docs.google.com/document/d/1Da8MMEJY8O2WXmHCmOFPe5BBp-40sD4zUruml2fr0Qc/edit?usp=sharing">Exam #1 Solutions</a>'
//         ]
//       },
//       {
//         heading: 'Topics',
//         entriesHTML: [
//           'Inheritance (the "is-a" relationship) &ndash; <a href="https://docs.google.com/document/d/1C22qC6mz_2m_2kB6xvoCFeVfsz8PPMBXIpQhmEvyYro/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS162-W18/inheritance">example code</a>',
//         ]
//       },
//       {
//         heading: 'Readings',
//         entriesHTML: [
//           '<a href="http://www.learncpp.com/cpp-tutorial/111-introduction-to-inheritance/">11.1 - Introduction to inheritance</a> &ndash; LearnCpp.com',
//           '<a href="http://www.learncpp.com/cpp-tutorial/112-basic-inheritance-in-c/">11.2 - Basic inheritance in C++</a> &ndash; LearnCpp.com'
//         ]
//       }
//     ]
//   },
//
//   {
//     week: 6,
//     sections: [
//       {
//         heading: 'Topics',
//         entriesHTML: [
//           'Polymorphism &ndash; <a href="https://docs.google.com/document/d/1GJaaVwUr20-PNZn5zCy-WcZfTWtHIk9f-9tUWVyLNkg/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS162-W18/polymorphism">example code</a>',
//           'Exceptions &ndash; <a href="https://docs.google.com/document/d/1gFuNbMun8-9dQ5P2b0ZDUdDA5GarrRu1sNadtZRLGS0/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS162-W18/exceptions">example code</a>'
//         ]
//       },
//       {
//         heading: 'Readings',
//         entriesHTML: [
//           '<a href="http://www.learncpp.com/cpp-tutorial/121-pointers-and-references-to-the-base-class-of-derived-objects/">12.1 &ndash; Pointers and references to the base class of derived objects</a> &ndash; LearnCpp.com',
//           '<a href="http://www.learncpp.com/cpp-tutorial/122-virtual-functions/">12.2 &ndash; Virtual functions and polymorphism</a> &ndash; LearnCpp.com',
//           '<a href="http://www.cplusplus.com/doc/tutorial/polymorphism/">Polymorphism</a> &ndash; cplusplus.com',
//           '<a href="http://www.learncpp.com/#Chapter14">Chapter 14 (Exceptions)</a> &ndash; LearnCpp.com',
//           '<a href="http://www.cplusplus.com/doc/tutorial/exceptions/">Exceptions</a> &ndash; cplusplus.com',
//           '<a href="https://www.codeproject.com/Articles/38449/C-Exceptions-Pros-and-Cons">C++ Exceptions: Pros and Cons</a> &ndash; Code Project'
//         ]
//       },
//       {
//         heading: 'Entrepreneurship Presentation',
//         entriesHTML: [
//           '<a href="https://drive.google.com/file/d/0B8aZMq9Vhvmrb29ib3NsOHVBZ0VuLU1nLXk0aHpXRHR6eUlj/view?usp=sharing">Entrepreneurship in CS</a> &ndash; These are the slides from Gabriel Kauffman\'s presentation on entrepreneurship'
//         ]
//       }
//     ]
//   },
//
//   {
//     week: 7,
//     sections: [
//       {
//         heading: 'Topics',
//         entriesHTML: [
//           'Templates and the C++ Standard Template Library (STL) &ndash; <a href="https://docs.google.com/document/d/1TMz14Bx4TkCWME4qIEatONifl_JmVkiZXl1H7Y2V9Cw/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS162-W18/templates">example code</a>',
//         ]
//       },
//       {
//         heading: 'Readings',
//         entriesHTML: [
//           '<a href="http://www.cplusplus.com/doc/oldtutorial/templates/">Templates</a> &ndash; cplusplus.com',
//           '<a href="http://www.learncpp.com/#Chapter13">Chapter 13 (Templates)</a> &ndash; LearnCpp.com',
//           '<a href="http://www.learncpp.com/#Chapter16">Chapter 16 (The Standard Template Library)</a> &ndash; LearnCpp.com',
//           '<a href="http://www.yolinux.com/TUTORIALS/LinuxTutorialC++STL.html">C++ STL Tutorial and Examples</a> &ndash; yolinux.com'
//         ]
//       }
//     ]
//   },
//
//   {
//     week: 8,
//     sections: [
//       {
//         heading: 'Topics',
//         entriesHTML: [
//           'Complexity Analysis (Big O) &ndash; <a href="https://docs.google.com/document/d/1DeNgvvPxNR0DkrCSmwZFh01wTnstJABRQuS8vLpcQLA/edit?usp=sharing">notes</a>',
//           'Sorting Algorithms &ndash; <a href="https://docs.google.com/document/d/1KlpahJuzj_FCl-PernsVINRxWviS3NloQTjXjlI-Vfs/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS162-W18/sorting">example code</a>'
//         ]
//       },
//       {
//         heading: 'Readings',
//         entriesHTML: [
//           '<a href="https://en.wikipedia.org/wiki/Analysis_of_algorithms">Analysis of algorithms</a> &ndash; Wikipedia',
//           '<a href="https://en.wikipedia.org/wiki/Sorting_algorithm">Sorting algorithm</a> &ndash; Wikipedia',
//           '<a href="https://en.wikipedia.org/wiki/Selection_sort">Selection sort</a> &ndash; Wikipedia',
//           '<a href="https://en.wikipedia.org/wiki/Insertion_sort">Insertion sort</a> &ndash; Wikipedia',
//           '<a href="https://en.wikipedia.org/wiki/Merge_sort">Merge sort</a> &ndash; Wikipedia'
//         ]
//       }
//     ]
//   },
//
//   {
//     week: 9,
//     sections: [
//       {
//         heading: 'Second Exam',
//         entriesHTML: [
//           'Our second exam will be this Wednesday at our normal lecture location and time.',
//           'The exam will cover everything we talked about in lecture after the first exam, from inheritance through sorting algorithms.',
//           'Below is a link to an old exam (and its soluitions) that you can use for practice:<ul><li><a href="https://docs.google.com/document/d/1OvL-Z8hvgLnVl3VaMv2URzjKkBSEqrz1Rl9JWU1DwPA/edit?usp=sharing">Practice exam</a></li><li><a href="https://docs.google.com/document/d/19qd56TBphz2xTjTOOJ3XDoz_k-rJYranriHrfSehwKY/edit?usp=sharing">Practice exam solutions</a></li></ul>'
//         ]
//       },
//       {
//         heading: 'Topics',
//         entriesHTML: [
//           'Sorting Algorithms &ndash; <a href="https://docs.google.com/document/d/1KlpahJuzj_FCl-PernsVINRxWviS3NloQTjXjlI-Vfs/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS162-W18/sorting">example code</a>'
//         ]
//       }
//     ]
//   },
//
//   {
//     week: 10,
//     sections: [
//       {
//         heading: 'Topics',
//         entriesHTML: [
//           'Recursion and Quicksort &ndash; <a href="https://docs.google.com/document/d/1HOfRbc2lOC5i5ncDEjRu_lPRm4ruwJvPGLCAT-y_SIM/edit?usp=sharing">notes</a> &ndash; <a href="https://github.com/OSU-CS162-W18/sorting">example code</a>',
//         ]
//       },
//       {
//         heading: 'Readings',
//         entriesHTML: [
//           '<a href="http://www.learncpp.com/cpp-tutorial/7-11-recursion/">7.11 &ndash; Recursion</a> &ndash; LearnCpp.com',
//           '<a href="https://en.wikipedia.org/wiki/Quicksort">Quicksort</a> &ndash; Wikipedia'
//         ]
//       }
//     ]
//   }
// ];

export default topics;
