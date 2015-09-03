(function() {
   var app = angular.module('esec-website', [ ]);
   
   app.controller('SpeakerController', function() {
      this.speakers = guests;
   });
   
   app.controller('PanelController', function() {
      this.tab = 0;
      
      this.selectTab = function(setTab) {
         this.tab = setTab;
      };
      this.isSelected = function(checkTab) {
         return this.tab === checkTab;
      };
   });
   
   var guests = [
      {          
         name: 'Mr. Nitin Kawale',
         nickname: 'Nitin Kawale',
         option: 'Keynote',
         provenance: 'N\u03A8 8T3',
         school: 'President of Enterprise Business Unit at Rogers Communications',
         description: [''],
         url:'https://www.linkedin.com/profile/view?id=3195933&authType=NAME_SEARCH&authToken=bOPg&locale=en_US&srchid=292640571435159651811&srchindex=1&srchtotal=7&trk=vsrp_people_res_name&trkInfo=VSRPsearchId%3A292640571435159651811%2CVSRPtargetId%3A3195933%2CVSRPcmpt%3Aprimary%2CVSRPnm%3Atrue',
         img:'https://thebenclark.files.wordpress.com/2014/03/facebook-default-no-profile-pic.jpg'
      },
      {   
         name: 'Dr. Steve Zan',
         nickname: 'Steve Zan',
         option: 'Aerospace Engineering',
         provenance: 'N\u03A8 8T4',
         school: 'Director of Research & Development at National Research Council (NRC) Aerodynamics Lab',
         description: ['Steve Zan joined the Aerodynamics Laboratory of the National Research Council of Canada (NRC) in 1984 after graduating from Eng. Sci. at U of T.  He obtained a PhD in aeronautical engineering from the University of Cambridge in 1990.  In his thirty-one year career he has become a leading expert on subsonic wind tunnel testing, having applied his knowledge to commercial aircraft development programs, to launch and recovery of rotorcraft from ships, and to wind loading of some of the world\'s major structures.  Dr. Zan was appointed Director R&D - Aerodynamics at NRC in 2006.', 'Dr. Zan has represented NRC and Canada on a number of international committees including the Subsonic Aerodynamic Testing Association, The Technical Cooperation Program and NATO-RTO Technical Teams.  He served as chair of the NATO-Applied Vehicle Technologies Technical Committee on Performance, Stability & Control and Fluid Physics from 2011 to 2013 and remains an active member of the Committee.', 'His academic credentials include a Research Fellowship at Darwin College, Cambridge, an appointment as an Honorary Research Fellow at the University of Liverpool (2006) and an appointment as an Adjunct Professor at Carleton University (2004- 2010).  He served as Editor-in-Chief of the Canadian Aeronautics and Space Journal from 2007 to 2013 and is an Associate Fellow of the Canadian Aeronautics and Space Institute.'],
         url:'http://www.nrc-cnrc.gc.ca/eng/rd/aerospace/index.html',
         img:'image/steve_zan.jpg'
      }, 
      {
         name: 'Dr. Yvonne Ying',
         nickname: 'Yvonne Ying',
         option: 'Biomedical Systems Engineering',
         provenance: 'N\u03A8 9T6',
         school: 'Pediatric Plastic Surgeon at Children\'s Hospital of Eastern Ontario (CHEO)',
         description: ['Yvonne Ying is a graduate of the N\u03A8 9T6 Biomedical (Chem) Option.  She then completed a Master\'s Degree in Chemical Engineering at Johns Hopkins University.   After graduate school, she pursued medical school at the University of Calgary, Plastic Surgery residency at McMaster University, and a Pediatric Plastic Surgery Fellowship at the Hospital for Sick Children.  During this time, Yvonne also completed a Master\'s degree in Health Professions Education from the University of Toronto.', 'Currently, her main areas of academic interest are in Global Surgery, Health Advocacy, and Surgical Education.  Yvonne has been involved in a number of international surgery projects, from providing free surgical care in low-resource countries, to helping support surgical training programs in Guyana.  At home, she is involved in developing and improving surgical training for residents, and has also worked on building an inner city surgical clinic to improve access to care for marginalized patients.   She has recently started working on building international education partnerships to share teaching and learning ideas in this increasingly globalized community.'],
         url:'http://www.med.uottawa.ca/surgery/eng/05pp_faculty.html',
         img:'image/yvonne_ying.jpg'
      },
      {
         name: 'Prof. Maryam Shanechi',
         nickname: 'Maryam Shanechi',
         option: 'Electrical & Computer Engineering',
         provenance: 'N\u03A8 0T4',
         school: 'Assistant Professor at University of Southern California',
         description: ['Maryam Shanechi is an assistant professor and the Viterbi Early Career Chair in Electrical Engineering at the University of Southern California (USC). Prior to joining USC, she was an assistant professor in the School of Electrical and Computer Engineering at Cornell University. She received the B.A.Sc. degree in Engineering Science from the University of Toronto in 2004 and the S.M. and Ph.D. degrees in Electrical Engineering and Computer Science from MIT in 2006 and 2011, respectively. She held postdoctoral fellowships at Harvard Medical School from 2011-2012 and at the University of California, Berkeley from 2012-2013. She has received various awards for academic achievement including the NSERC doctoral fellowship, the Professional Engineers of Ontario gold medal, and the W.S. Wilson medal. She is the recipient of the NSF CAREER Award, has been selected by the National Academy of Engineering (NAE) for the Frontiers of Engineering (FOE) symposium, and has been named by the MIT Technology Review as one of the world\'s top 35 innovators under the age of 35 (TR35) for her work on brain-machine interfaces.', 'Maryam\'s research focuses on using the principles of information and control theories and statistical signal processing to develop effective algorithmic technologies for basic and clinical neuroscience problems. In particular, she develops brain-machine interfaces for restoring movement in paralysis, for control of anesthesia, and for brain stimulation to treat neuropsychiatric disorders.'],
         url:'http://ee.usc.edu/faculty_staff/faculty_directory/shanechi.htm',
         img:'image/maryam_shanechi.jpg'
      },
      {
         name: 'Mr. Ravi Thuraisingham',
         nickname: 'Ravi Thuraisingham',
         option: 'Energy Systems Engineering',
         provenance: 'N\u03A8 8T8',
         school: 'Founder/CEO/Managing Partner at LightWing Partners, SunWing',
         description: [''],
         url:'http://www.bloomberg.com/research/stocks/private/person.asp?personId=140992806&privcapId=115871046',
         img:'https://thebenclark.files.wordpress.com/2014/03/facebook-default-no-profile-pic.jpg'
      },
      {
         name: 'Prof. Greg McLaskey',
         nickname: 'Greg McLaskey',
         option: 'Infrastructure Engineering',
         provenance: '',
         school: 'Professor at Cornell University',
         description: [''],
         url:'http://www.engineering.cornell.edu/brand/independent/faculty/greg-mclaskey.cfm',
         img:'https://thebenclark.files.wordpress.com/2014/03/facebook-default-no-profile-pic.jpg'
      },
      {
         name: 'Dr. Andrew Gustensen',
         nickname: 'Andrew Gustensen',
         option: 'Engineering Mathematics, Statistics and Finance',
         provenance: 'N\u03A8 8T7',
         school: 'Managing Director at Bank of America',
         description: [''],
         url:'https://www.linkedin.com/pub/andrew-gunstensen/11/451/8a0',
         img:'https://thebenclark.files.wordpress.com/2014/03/facebook-default-no-profile-pic.jpg'
      },
      {
         name: 'Prof. David Macfarlane',
         nickname: 'David Macfarlane',
         option: 'Engineering Physics',
         provenance: 'N\u03A8 7T8',
         school: 'Director of Particle Physics and Astrophysics at SLAC National Accelerator Laboratory (Stanford University)',
         description: [''],
         url:'https://news.slac.stanford.edu/features/director-particle-physics-and-astrophysics',
         img:'https://thebenclark.files.wordpress.com/2014/03/facebook-default-no-profile-pic.jpg'
      },
      {
         name: 'Prof. Ryan Eustice',
         nickname: 'Ryan Eustice',
         option: 'Robotics Engineering',
         provenance: '',
         school: 'Associate Professor at University of Michigan',
         description: ['Ryan M. Eustice is an Associate Professor in the Department of Naval Architecture and Marine Engineering at the University of Michigan where he additionally holds joint appointments in the Department of Electrical Engineering and Computer Science, and the Department of Mechanical Engineering. He is the Director of the Perceptual Robotics Laboratory (PeRL), a mobile robotics laboratory focused on algorithm development in the areas of robotic perception, navigation, and mapping. His active research projects include applications to autonomous underwater ship hull inspection, multi-vehicle cooperative underwater navigation, benthic high-resolution mapping, and automotive active safety and self-driving capabilities.', 'Prior to joining the University of Michigan in 2006, he was a Post-Doctoral Scholar at the Dynamical Systems and Controls Lab at The Johns Hopkins University and holds a B.S. degree in Mechanical Engineering from Michigan State University (1998) and a Ph.D. in Ocean Engineering from the MIT/WHOI Joint-Program (2005). He is recipient of a NSF CAREER Award and ONR Young Investigator Award, and is an Associate Editor for IEEE Transactions on Robotics and IEEE Journal of Oceanic Engineering. His work on self-driving cars is in cooperation with Ford Motor Company on the Next Generation Vehicle project.'],
         url:'http://robots.engin.umich.edu/~ryan/',
         img:'image/ryan_eustice.jpg'
      }
   ];
   
})();