const otherSTORE = [
    {
      question: '1 How many 8 -bit character does the ASCII standard define',
      answers: [
        'A. 64',
        'B. 256',
        'C. 512',
        'D. 64,000',
        ],
      correctAnswer: 'B. 256',
      icon: 'https://i.imgur.com/G3IuGiC.jpg',
      alt: 'ant lifting a branch saying you can do this'
    },
    {
      question: '2 Which of the following wireless communication standards requires line of sight in order to operate?',
      answers: [
        'A. Bluetooth',
        'B. IR',
        'C. RF',
        'D. WIFI'
        ],
        correctAnswer: 'B. IR',
        icon: 'https:////live.staticflickr.com/3837/14595013521_b81d3b148f_n.jpg',
        alt: 'nothing worth having come easy'
    },
    {
      question: '3 Tom, an individual, has recently been calling various financial offices pretending to be another person to gain financial information. Which of the following attacks is being described?',
      answers: [
        'A. Pharming',
        'B. Vishing',
        'C. Tailgating',
        'D. Phishing'
        ],
        correctAnswer: 'B. Vishing', 
        icon: 'https://i.imgur.com/FEZWyKl.jpg',
        alt: 'duck tumbs up'
    },
    {
      question: '4 Rebecca, a security analyst, is trying to prove to management what costs they could incur if their customer database was breached. This database contains 250 records with PII. Studies show that the cost per record for a breach is $350. The likelihood that their database would be breached in the next year is only 8%. Which of the following is the ALE that Rebecca should report to management for a security breach?',
      answers: [
       ' A. $7,500',
        'B. $7,000',
        'C. $75,000',
        'D. $27,000'
        ],
      correctAnswer: 'B. $7,000',
      icon: 'https://i.imgur.com/G3IuGiC.jpg',
      alt: 'ant lifting a branch saying you can do this'
    },
    {
      question: '5 For linux Which tool is used to configure a sound card device?',
      answers: [
        'A. sndconf',
        'B. sndconfig',
        'C. soundconf',
        'D. soundconfig'
        ],
      correctAnswer: 'B. sndconfig',
      icon: 'https://i.imgur.com/G3IuGiC.jpg',
      alt: 'ant lifting a branch saying you can do this'
    },
    {
      question: '6 How many primary partitions can you have on a hard disk?',
      answers: [
        'A. 8',
        'B. 4',
        'C. 16',
        'D. 32'
        ],
      correctAnswer: 'B. 4',
      icon: 'https:////live.staticflickr.com/4244/34846757232_8eb23269d5_n.jpg',
      alt: 'cartoon of coder saying structure of code'
    },
    {
      question: '7 On the command-line which key allows you to view the last command entered?',
      answers: [
        'A. down arrow',
        'B. up arrow',
        'C. right arrow',
        'D. left arrow'
      ],
      correctAnswer: 'B. up arrow',
      icon: 'https://live.staticflickr.com/7567/15468649553_a105279e38_n.jpg',
      alt: 'matrix in view of sun glasses'
    },
    {
      question: '8 which of the following is the smartest',
      answers: [
        'A. The average college student majoring as a developer',
        'B. The smartest computer',
        'C. The person who made a supercomputers',
        'D. The teacher'
      ],
      correctAnswer: 'B. The smartest computer',
      icon: 'https://live.staticflickr.com/3618/3567877748_f3d35539e8_n.jpg',
      alt: 'a person flexing'
    },
    {
      question: '9 The Operating System is a ?',
      answers: [
      'A. Application Software',
      'B. System Software',
      'C. Utility Software',
      'D. Malware'

      ],
      correctAnswer: 'B. System Software',
      icon: 'https://live.staticflickr.com/65535/46947115935_6ae799066a_n.jpg',
      alt: 'dominos lined up topping over to the last one'  
    },
    {
        question: ' 10 An attacker attempted to compromise a web form by inserting the following input into the username field: admin)(|(password=*)) Which of the following types of attacks was attempted?',
        answers: [
     'A. Command injection',
     'B. LDAP injection',
     'C. SQL injection',
     'D. XSS'
      ],
      correctAnswer: 'B. LDAP injection',
      icon: 'https://live.staticflickr.com/8346/8206431705_ebb7e9f2f5_n.jpg',
      alt: 'street sign saying end 22'
      }
    ];
  //////////////////  //////////////////  //////////////////  //////////////////  //////////////////  //////////////////
  ///////////// level 1 below  /////  //////////////////  //////////////////  //////////////////  //////////////////  //////////////////  
const STORE = [
    {
      question: '1) You are trying to use RDP to control a Windows computer from your office to an accountant computer in the corporate office building. What port should be opened in the firewalls between the two locations?',
      answers: [
        'A) 21', 
        'B) 22',
        'C) 3389',
        'D) 143',
        ],
      correctAnswer: 'C) 3389',
      icon: 'https://i.imgur.com/G3IuGiC.jpg',
      alt: 'ant lifting a branch saying you can do this'
    },
    {
      question: '2) Which of the following properly describes the purpose of a KVM?',
      answers: [
       ' A) Allows for touch screen interaction',
        'B) Allows for one computer to be viewed on many monitors at once',
        'C) Allows for one set of peripherals to control multiple computers',
        'D) Enhanced graphics for video games'
        ],
        correctAnswer: 'C) Allows for one set of peripherals to control multiple computers',
        icon: 'https://live.staticflickr.com/3335/3293759838_12a7907fb1_m.jpg',
        alt: 'odler man setting a computer with rooting growing from his feet'
    },
    {
      question: '3) Which of the following properly describes the purpose of a KVM?',
      answers: [

        'A) Allows for touch screen interaction',
        'B) Allows for one computer to be viewed on many monitors at once',
        'C) Allows for one set of peripherals to control multiple computers',
        'D) Enhanced graphics for video games',
        ],
      correctAnswer: 'C) Allows for one set of peripherals to control multiple computers',
      icon: 'https://i.imgur.com/FEZWyKl.jpg',
      alt: 'duck tumbs up'
     },
     {
        question: '4) what name should not be used for an AI program?',
        answers: [
            'A) undefine',
            'B) humen',
            'C) sky net',
            'D) pet'
        ],
        correctAnswer: 'C) sky net',
        icon: 'https://i.imgur.com/G3IuGiC.jpg',
        alt: 'ant lifting a branch saying you can do this'
      },
    {
      question: '5) Of the following choices, which is an industry standard protocol used by computer networks to assign IP Addresses to network nodes and devices?',
      answers: [
        'A) DNS',
        'B) ARP',
        'C) DHCP',
        'D) RARP',
        ],
      correctAnswer: 'C) DHCP',
      icon: 'https://i.imgur.com/G3IuGiC.jpg',
      alt: 'ant lifting a branch saying you can do this'
    },
    {
      question: '6) To identify TCP/IP errors such as connection problems ______ command can be used',
      answers: [
        'A) FTP',       
        'B) POP3',
        'C) Ping',
        'D) STP'
        ],
      correctAnswer: 'C) Ping',
      icon: 'https://live.staticflickr.com/1827/41674312120_36cb6dc371_n.jpg',
      alt: 'kids climing steps'
    },
    {
      question: '7) You are a Server Administrator at a small company. Company policy dictates that all remote connections must be encrypted and accessed using some form of authentication. Which of the following will allow a user to upload a large file from home, while adhering to company policy?',
      answers: [
            'A) SSH',
            'B) SMTP',
            'C) SFTP',
            'D) FTP'
      ],
      correctAnswer: 'C) SFTP',
      icon: 'https://i.imgur.com/VM8Y3MM.gif',
      alt: 'matrix animation 1'
    },
    {
      question: '8) A network analyst received a number of reports that impersonation was taking place on the network. Session tokens were deployed to mitigate this issue and defend against which of the following attacks?',
      answers: [
        'A) DDos',
        'B) Phishing',
        'C) Replay',
        'D) Smurf'        
      ],
      correctAnswer: 'C) Replay',
      icon: 'https://live.staticflickr.com/3618/3567877748_f3d35539e8_n.jpg',
      alt: 'a person flexing'
    },
    {
      question: '9) Which of the following is the MOST secure protocol to transfer files?',
      answers: [
        'A) FTP',
        'B) TELNET',
        'C) FTPS',
        'D) SSH'
      ],
      correctAnswer: 'C) FTPS',
      icon: 'https://live.staticflickr.com/65535/46947115935_6ae799066a_n.jpg',
      alt: 'dominos lined up topping over to the last one'
    },
    {
      question: '10) Which of the following should Bill, a security administrator, perform before a hard drive is analyzed with forensics tools?',
      answers: [
        'A) Disconnect system from network',
        'B) Interview witnesses',
        'C) Capture system image',
        'D) Identify user habits'
    ],
    correctAnswer: 'C) Capture system image',

    icon: 'https://live.staticflickr.com/8346/8206431705_ebb7e9f2f5_n.jpg',
    alt: 'street sign saying end 44'
    },
];



	