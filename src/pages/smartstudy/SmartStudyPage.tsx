import { BookOpen, Music, ExternalLink, Download, Play, Brain } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const examBooks = {
  JEE: {
    subjects: {
      Physics: [
        { title: "Concepts of Physics by H.C. Verma (Vol 1 & 2)", link: "https://www.amazon.in/dp/8177091875" },
        { title: "Fundamentals of Physics by Halliday, Resnick & Walker", link: "https://www.amazon.in/dp/1118230736" },
        { title: "Problems in General Physics by I.E. Irodov", link: "https://www.amazon.in/dp/8123902166" }
      ],
      Chemistry: [
        { title: "Organic Chemistry by O.P. Tandon", link: "https://www.amazon.in/dp/8186299815" },
        { title: "Physical Chemistry by P. Bahadur", link: "https://www.amazon.in/dp/8121925622" },
        { title: "Inorganic Chemistry by J.D. Lee", link: "https://www.amazon.in/dp/0198503652" }
      ],
      Mathematics: [
        { title: "Mathematics for Class 11 & 12 by R.D. Sharma", link: "https://www.amazon.in/dp/9352031962" },
        { title: "Higher Algebra by Hall & Knight", link: "https://www.amazon.in/dp/8188222011" },
        { title: "Plane Trigonometry by S.L. Loney", link: "https://www.amazon.in/dp/8188222003" }
      ]
    }
  },
  "MHT CET": {
    subjects: {
      Physics: [
        { title: "Target MHT CET Physics by Disha Publications", link: "https://www.amazon.in/dp/9387521494" },
        { title: "MHT CET Physics Guide by MTG", link: "https://www.amazon.in/dp/9389167183" },
        { title: "Maharashtra HSC Physics Textbook", link: "https://www.amazon.in/dp/8171821944" }
      ],
      Chemistry: [
        { title: "Target MHT CET Chemistry by Disha Publications", link: "https://www.amazon.in/dp/9387521486" },
        { title: "MHT CET Chemistry Guide by MTG", link: "https://www.amazon.in/dp/9389167191" },
        { title: "Maharashtra HSC Chemistry Textbook", link: "https://www.amazon.in/dp/8171821952" }
      ],
      Mathematics: [
        { title: "Target MHT CET Mathematics by Disha Publications", link: "https://www.amazon.in/dp/9387521478" },
        { title: "MHT CET Mathematics Guide by MTG", link: "https://www.amazon.in/dp/9389167175" },
        { title: "Maharashtra HSC Mathematics Textbook", link: "https://www.amazon.in/dp/8171821960" }
      ],
      Biology: [
        { title: "Target MHT CET Biology by Disha Publications", link: "https://www.amazon.in/dp/9387521502" },
        { title: "MHT CET Biology Guide by MTG", link: "https://www.amazon.in/dp/9389167207" },
        { title: "Maharashtra HSC Biology Textbook", link: "https://www.amazon.in/dp/8171821979" }
      ]
    }
  },
  NEET: {
    subjects: {
      Physics: [
        { title: "NCERT Physics Class 11 & 12", link: "https://ncert.nic.in/textbook.php" },
        { title: "Objective Physics by DC Pandey", link: "https://www.amazon.in/dp/8188222054" },
        { title: "Complete NEET Guide Physics by MTG", link: "https://www.amazon.in/dp/9386561611" }
      ],
      Chemistry: [
        { title: "NCERT Chemistry Class 11 & 12", link: "https://ncert.nic.in/textbook.php" },
        { title: "Modern Approach to Chemical Calculations by R.C. Mukherjee", link: "https://www.amazon.in/dp/8186299637" },
        { title: "Complete NEET Guide Chemistry by MTG", link: "https://www.amazon.in/dp/938656162X" }
      ],
      Biology: [
        { title: "NCERT Biology Class 11 & 12", link: "https://ncert.nic.in/textbook.php" },
        { title: "Objective Biology by Dinesh", link: "https://www.amazon.in/dp/8186299866" },
        { title: "Complete NEET Guide Biology by MTG", link: "https://www.amazon.in/dp/9386561638" }
      ]
    }
  }
};

const focusedMusic = [
  {
    title: "Binaural Beats for Deep Focus",
    description: "40Hz binaural beats to enhance concentration and memory retention",
    duration: "1 hour",
    link: "https://www.youtube.com/watch?v=GqXEJm8xjIE",
    type: "Binaural"
  },
  {
    title: "Classical Music for Studying",
    description: "Mozart and Bach compositions proven to improve cognitive function",
    duration: "2 hours",
    link: "https://www.youtube.com/watch?v=jgpJVI3tDbY",
    type: "Classical"
  },
  {
    title: "Ambient Study Music",
    description: "Soft ambient sounds perfect for long study sessions",
    duration: "3 hours",
    link: "https://www.youtube.com/watch?v=5qap5aO4i9A",
    type: "Ambient"
  },
  {
    title: "Lo-Fi Hip Hop Beats",
    description: "Relaxing lo-fi beats to keep you in the zone",
    duration: "24/7 Live",
    link: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
    type: "Lo-Fi"
  },
  {
    title: "Nature Sounds with Music",
    description: "Rain and forest sounds mixed with gentle melodies",
    duration: "1.5 hours",
    link: "https://www.youtube.com/watch?v=5BYfg65XDCM",
    type: "Nature"
  },
  {
    title: "Alpha Waves for Study",
    description: "8-14Hz alpha waves to promote relaxed focus state",
    duration: "1 hour",
    link: "https://www.youtube.com/watch?v=WPni755-Krg",
    type: "Alpha Waves"
  },
  {
    title: "Instrumental Focus Playlist",
    description: "Curated instrumental tracks for maximum productivity",
    duration: "2.5 hours",
    link: "https://www.youtube.com/watch?v=lTRiuFIWV54",
    type: "Instrumental"
  },
  {
    title: "Meditation Music for Study",
    description: "Calming meditation music to reduce stress while studying",
    duration: "1 hour",
    link: "https://www.youtube.com/watch?v=inpok4MKVLM",
    type: "Meditation"
  }
];

const teachingChannels = {
  Physics: [
    { name: "Physics Wallah", channel: "Physics Wallah - Alakh Pandey", link: "https://www.youtube.com/@PhysicsWallah", subscribers: "8.9M" },
    { name: "Vedantu JEE", channel: "Vedantu JEE", link: "https://www.youtube.com/@VedantuJEE", subscribers: "2.1M" },
    { name: "Khan Academy", channel: "Khan Academy", link: "https://www.youtube.com/@khanacademy", subscribers: "7.9M" },
    { name: "BYJU'S Classes", channel: "BYJU'S Classes", link: "https://www.youtube.com/@byjusclasses", subscribers: "3.2M" },
    { name: "Unacademy JEE", channel: "Unacademy JEE", link: "https://www.youtube.com/@UnacademyJEE", subscribers: "1.8M" }
  ],
  Chemistry: [
    { name: "Pankaj Singh Chemistry", channel: "Pankaj Singh Chemistry", link: "https://www.youtube.com/@PankajSinghChemistry", subscribers: "1.2M" },
    { name: "Vedantu NEET", channel: "Vedantu NEET", link: "https://www.youtube.com/@VedantuNEET", subscribers: "1.9M" },
    { name: "Unacademy NEET", channel: "Unacademy NEET", link: "https://www.youtube.com/@UnacademyNEET", subscribers: "2.3M" },
    { name: "Physics Wallah Chemistry", channel: "Physics Wallah", link: "https://www.youtube.com/@PhysicsWallah", subscribers: "8.9M" },
    { name: "Khan Academy Chemistry", channel: "Khan Academy", link: "https://www.youtube.com/@khanacademy", subscribers: "7.9M" }
  ],
  Mathematics: [
    { name: "Mohit Tyagi", channel: "Mohit Tyagi", link: "https://www.youtube.com/@mohittyagi", subscribers: "1.5M" },
    { name: "Neha Agrawal Mathematically Inclined", channel: "Neha Agrawal Mathematically Inclined", link: "https://www.youtube.com/@NehaAgrawalMathematicallyInclined", subscribers: "890K" },
    { name: "Vedantu Math", channel: "Vedantu Math", link: "https://www.youtube.com/@VedantuMath", subscribers: "1.1M" },
    { name: "Khan Academy Math", channel: "Khan Academy", link: "https://www.youtube.com/@khanacademy", subscribers: "7.9M" },
    { name: "Mathematics by Rakesh Yadav", channel: "Rakesh Yadav", link: "https://www.youtube.com/@RakeshYadav", subscribers: "650K" }
  ],
  Biology: [
    { name: "Shomu's Biology", channel: "Shomu's Biology", link: "https://www.youtube.com/@ShomusBiology", subscribers: "1.8M" },
    { name: "Amoeba Sisters", channel: "Amoeba Sisters", link: "https://www.youtube.com/@AmoebaSisters", subscribers: "3.1M" },
    { name: "Vedantu NEET Biology", channel: "Vedantu NEET", link: "https://www.youtube.com/@VedantuNEET", subscribers: "1.9M" },
    { name: "Biology by Dr. Anand Mani", channel: "Dr. Anand Mani", link: "https://www.youtube.com/@DrAnandMani", subscribers: "780K" },
    { name: "Unacademy Biology", channel: "Unacademy NEET", link: "https://www.youtube.com/@UnacademyNEET", subscribers: "2.3M" }
  ],
  English: [
    { name: "English with Lucy", channel: "English with Lucy", link: "https://www.youtube.com/@EnglishwithLucy", subscribers: "5.7M" },
    { name: "Magnet Brains English", channel: "Magnet Brains", link: "https://www.youtube.com/@MagnetBrains", subscribers: "9.1M" },
    { name: "Study IQ Education", channel: "StudyIQ Education", link: "https://www.youtube.com/@StudyIQEducation", subscribers: "4.2M" },
    { name: "CBSE Class 12 English", channel: "CBSE Adda", link: "https://www.youtube.com/@CBSEAdda", subscribers: "1.3M" },
    { name: "English Literature by Kirti Choudhary", channel: "Kirti Choudhary", link: "https://www.youtube.com/@KirtiChoudhary", subscribers: "560K" }
  ],
  History: [
    { name: "StudyIQ History", channel: "StudyIQ Education", link: "https://www.youtube.com/@StudyIQEducation", subscribers: "4.2M" },
    { name: "History Simplified", channel: "History Simplified", link: "https://www.youtube.com/@HistorySimplified", subscribers: "1.1M" },
    { name: "Magnet Brains History", channel: "Magnet Brains", link: "https://www.youtube.com/@MagnetBrains", subscribers: "9.1M" },
    { name: "Unacademy History", channel: "Unacademy Plus", link: "https://www.youtube.com/@UnacademyPlus", subscribers: "2.8M" },
    { name: "History by Aadesh Singh", channel: "Aadesh Singh", link: "https://www.youtube.com/@AadeshSingh", subscribers: "750K" }
  ],
  Geography: [
    { name: "Geography by Amit Sengupta", channel: "Amit Sengupta", link: "https://www.youtube.com/@AmitSengupta", subscribers: "920K" },
    { name: "StudyIQ Geography", channel: "StudyIQ Education", link: "https://www.youtube.com/@StudyIQEducation", subscribers: "4.2M" },
    { name: "Magnet Brains Geography", channel: "Magnet Brains", link: "https://www.youtube.com/@MagnetBrains", subscribers: "9.1M" },
    { name: "Geography Optional", channel: "Geography Optional", link: "https://www.youtube.com/@GeographyOptional", subscribers: "680K" },
    { name: "Unacademy Geography", channel: "Unacademy Plus", link: "https://www.youtube.com/@UnacademyPlus", subscribers: "2.8M" }
  ],
  Economics: [
    { name: "Economics by Rajat Arora", channel: "Rajat Arora", link: "https://www.youtube.com/@RajatArora", subscribers: "1.2M" },
    { name: "StudyIQ Economics", channel: "StudyIQ Education", link: "https://www.youtube.com/@StudyIQEducation", subscribers: "4.2M" },
    { name: "Khan Academy Economics", channel: "Khan Academy", link: "https://www.youtube.com/@khanacademy", subscribers: "7.9M" },
    { name: "Economics Simplified", channel: "Economics Simplified", link: "https://www.youtube.com/@EconomicsSimplified", subscribers: "850K" },
    { name: "Magnet Brains Economics", channel: "Magnet Brains", link: "https://www.youtube.com/@MagnetBrains", subscribers: "9.1M" }
  ],
  "Political Science": [
    { name: "Political Science by Laxmikanth", channel: "Laxmikanth Polity", link: "https://www.youtube.com/@LaxmikanthPolity", subscribers: "780K" },
    { name: "StudyIQ Polity", channel: "StudyIQ Education", link: "https://www.youtube.com/@StudyIQEducation", subscribers: "4.2M" },
    { name: "Unacademy Polity", channel: "Unacademy Plus", link: "https://www.youtube.com/@UnacademyPlus", subscribers: "2.8M" },
    { name: "Magnet Brains Political Science", channel: "Magnet Brains", link: "https://www.youtube.com/@MagnetBrains", subscribers: "9.1M" },
    { name: "Political Science Hub", channel: "Political Science Hub", link: "https://www.youtube.com/@PoliticalScienceHub", subscribers: "450K" }
  ],
  "Computer Science": [
    { name: "Code with Harry", channel: "CodeWithHarry", link: "https://www.youtube.com/@CodeWithHarry", subscribers: "4.1M" },
    { name: "Programming with Mosh", channel: "Programming with Mosh", link: "https://www.youtube.com/@programmingwithmosh", subscribers: "3.2M" },
    { name: "freeCodeCamp", channel: "freeCodeCamp.org", link: "https://www.youtube.com/@freecodecamp", subscribers: "7.8M" },
    { name: "Apna College", channel: "Apna College", link: "https://www.youtube.com/@ApnaCollegeOfficial", subscribers: "4.9M" },
    { name: "Jenny's Lectures", channel: "Jenny's Lectures CS IT", link: "https://www.youtube.com/@JennyslecturesCSIT", subscribers: "1.4M" }
  ]
};

const studyTechniques = [
  {
    title: "How to Study Effectively with Scientific Methods",
    channel: "Thomas Frank",
    description: "Evidence-based study techniques for maximum efficiency",
    duration: "15 min",
    link: "https://www.youtube.com/watch?v=VKo8td_kbAU",
    technique: "Active Recall"
  },
  {
    title: "Feynman Technique: Master Any Topic in 4 Steps",
    channel: "Zach Highley",
    description: "Nobel Prize winner's method for understanding complex concepts",
    duration: "8 min",
    link: "https://www.youtube.com/watch?v=tkm0TNFzIeg",
    technique: "Feynman Method"
  },
  {
    title: "The Science of Spaced Repetition",
    channel: "Veritasium",
    description: "How to remember anything forever using scientifically proven intervals",
    duration: "12 min",
    link: "https://www.youtube.com/watch?v=cVf38y07cfk",
    technique: "Spaced Repetition"
  },
  {
    title: "Pomodoro Technique: 25-Minute Study Sessions",
    channel: "Ali Abdaal",
    description: "Time management technique for maintaining focus and avoiding burnout",
    duration: "10 min",
    link: "https://www.youtube.com/watch?v=mNBmG24djoY",
    technique: "Pomodoro"
  },
  {
    title: "Mind Mapping for Faster Learning",
    channel: "Justin Sung",
    description: "Visual learning technique to organize and retain information",
    duration: "18 min",
    link: "https://www.youtube.com/watch?v=5nTuScU70As",
    technique: "Mind Mapping"
  },
  {
    title: "The Cornell Note-Taking System",
    channel: "Marty Lobdell",
    description: "Structured note-taking method for better comprehension and review",
    duration: "7 min",
    link: "https://www.youtube.com/watch?v=lsR-10piUUs",
    technique: "Cornell Notes"
  },
  {
    title: "How to Read Faster and Comprehend Better",
    channel: "Jim Kwik",
    description: "Speed reading techniques without losing comprehension",
    duration: "14 min",
    link: "https://www.youtube.com/watch?v=ZwEquW_Yij0",
    technique: "Speed Reading"
  },
  {
    title: "Memory Palace Technique for Exams",
    channel: "Memory Athlete",
    description: "Ancient method of loci for memorizing large amounts of information",
    duration: "16 min",
    link: "https://www.youtube.com/watch?v=PIhGl8MQQyI",
    technique: "Memory Palace"
  },
  {
    title: "Scientific Study Schedule Planning",
    channel: "Matt D'Avella",
    description: "How to create study schedules based on cognitive science",
    duration: "11 min",
    link: "https://www.youtube.com/watch?v=ErWXXUuXfSk",
    technique: "Schedule Planning"
  },
  {
    title: "Flow State: How to Enter Deep Focus",
    channel: "Improvement Pill",
    description: "Psychological techniques to achieve maximum concentration",
    duration: "9 min",
    link: "https://www.youtube.com/watch?v=znwUCNrjpD4",
    technique: "Flow State"
  }
];

const SmartStudyPage = () => {
  return (
    <PageLayout title="Smart Study Tools & Resources">
      <div className="section-container space-y-8">
        
        {/* Books Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Recommended Books</h2>
          </div>
          
          {Object.entries(examBooks).map(([exam, data]) => (
            <div key={exam} className="mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                {exam}
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {Object.keys(data.subjects).length} Subjects
                </Badge>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(data.subjects).map(([subject, books]) => (
                  <Card key={subject} className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg text-foreground">{subject}</CardTitle>
                      <CardDescription>Essential books for {subject}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {books.map((book, index) => (
                        <div key={index} className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground truncate" title={book.title}>
                              {book.title}
                            </p>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="shrink-0"
                            onClick={() => window.open(book.link, '_blank')}
                          >
                            <ExternalLink className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Focused Music Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Music className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Focused Music</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {focusedMusic.map((music, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                        {music.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline" className="text-xs">
                          {music.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{music.duration}</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {music.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => window.open(music.link, '_blank')}
                  >
                    <Music className="h-4 w-4 mr-2" />
                    Listen Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Teaching Channels Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Play className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Teaching Channels</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(teachingChannels).map(([subject, channels]) => (
              <Card key={subject} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{subject}</CardTitle>
                  <CardDescription>Best YouTube channels for {subject}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {channels.map((channel, index) => (
                    <div key={index} className="group">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate" title={channel.name}>
                            {channel.name}
                          </p>
                          <p className="text-xs text-muted-foreground truncate" title={channel.channel}>
                            {channel.channel}
                          </p>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="shrink-0"
                          onClick={() => window.open(channel.link, '_blank')}
                        >
                          <Play className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                          {channel.subscribers} subscribers
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How to Study Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Brain className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">How to Study</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studyTechniques.map((video, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                        {video.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline" className="text-xs">
                          {video.technique}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{video.duration}</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {video.description}
                  </CardDescription>
                  <p className="text-xs text-muted-foreground mt-1">by {video.channel}</p>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => window.open(video.link, '_blank')}
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Watch Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Study Tips */}
        <section className="bg-gradient-to-br from-primary/5 to-primary/3 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-foreground mb-4">Pro Study Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div>
              <h4 className="font-medium text-foreground mb-2">For Music Selection:</h4>
              <ul className="space-y-1">
                <li>• Use binaural beats for math and science</li>
                <li>• Choose classical music for reading comprehension</li>
                <li>• Try ambient sounds for creative subjects</li>
                <li>• Keep volume at 30-40% for optimal focus</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">For Book Selection:</h4>
              <ul className="space-y-1">
                <li>• Start with NCERT books as foundation</li>
                <li>• Use reference books for concept clarity</li>
                <li>• Practice with problem-solving books</li>
                <li>• Take notes while reading for better retention</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default SmartStudyPage;