import { Canvas } from '@react-three/fiber'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Trophy, 
  GraduationCap, 
  Briefcase,
  Terminal,
  Layers,
  Monitor,
  Database,
  ArrowRight
} from 'lucide-react'
import { FloatingShapes } from './components/3d/FloatingShapes'
import { TiltCard } from './components/TiltCard'
import { resumeData } from './data/resume'
import { Button } from '@blinkdotnew/ui'

const AnimatedTitle = () => {
  const titles = ['Full Stack Developer', 'Open to Work']
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.p
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl text-muted-foreground max-w-2xl mx-auto font-mono text-center"
      >
        {titles[currentIndex]}
      </motion.p>
    </AnimatePresence>
  )
}

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'academic', 'projects', 'education', 'skills', 'awards']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 px-6 py-6"
    >
      <div className="container mx-auto flex justify-between items-center glass px-8 py-4 rounded-full">
        <span className="text-xl font-bold tracking-tighter text-[hsl(189,87%,53%)]">Adarsh</span>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
          {['About', 'Experience', 'Academic', 'Projects', 'Education', 'Skills', 'Awards'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`transition-colors cursor-pointer ${
                activeSection === item.toLowerCase() 
                  ? 'text-[hsl(189,87%,53%)]' 
                  : 'hover:text-primary'
              }`}
            >
              {item}
            </a>
          ))}
        </div>
        <Button size="sm" variant="outline" className="rounded-full border-primary/20 hover:border-primary/50" asChild>
          <a href="/MY-RESUME.pdf" download="Adarsh_Kumar_Sharma_Resume.pdf">
            Resume
          </a>
        </Button>
      </div>
    </motion.nav>
  )
}

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <FloatingShapes />
          </Canvas>
        </div>
        
        <div className="container relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              <span className="text-[hsl(189,87%,53%)]">{resumeData.name}</span>
            </h1>
            <div className="h-20 flex items-center justify-center mb-10">
              <AnimatedTitle />
            </div>
            <div className="flex items-center justify-center gap-6">
              <Button size="lg" className="rounded-full px-8 btn-glow">
                View My Work
              </Button>
              <div className="flex gap-4">
                <a href={`https://github.com/${resumeData.github}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
                <a href={`https://linkedin.com/in/${resumeData.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href={`mailto:${resumeData.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-muted-foreground rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
                <span className="w-12 h-1 bg-primary rounded-full" />
                About Me
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {resumeData.about}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="glass p-6 rounded-2xl">
                  <h3 className="text-3xl font-bold text-primary mb-1">4+</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Internships</p>
                </div>
                <div className="glass p-6 rounded-2xl">
                  <h3 className="text-3xl font-bold text-accent mb-1">10+</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Tech Projects</p>
                </div>
              </div>
            </motion.div>
            <div className="relative">
              <motion.div
                className="w-full aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 flex items-center justify-center p-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-2 gap-4 w-full h-full">
                  {[Code2, Cpu, Terminal, Layers].map((Icon, i) => (
                    <motion.div
                      key={i}
                      className="glass rounded-2xl flex items-center justify-center text-primary"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                    >
                      <Icon size={48} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-white/[0.02]">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="p-3 glass rounded-2xl text-primary">
              <Briefcase size={32} />
            </div>
            <h2 className="text-4xl font-bold">Work Experience</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {resumeData.experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  x: 10,
                  transition: { duration: 0.3 }
                }}
                className="glass p-8 rounded-2xl border-l-4 border-l-primary group hover:bg-white/[0.05] hover:border-l-accent hover:shadow-2xl hover:shadow-primary/10 transition-all cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{exp.role}</h3>
                    <p className="text-primary/80 font-mono group-hover:text-accent transition-colors">{exp.company}</p>
                  </div>
                  <span className="px-4 py-1 glass rounded-full text-sm font-mono group-hover:bg-primary/10 group-hover:border-primary transition-all">{exp.period}</span>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, j) => (
                    <li key={j} className="flex gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors">
                      <ArrowRight size={18} className="text-primary shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Journey Section */}
      <section id="academic" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="p-3 glass rounded-2xl text-accent">
              <GraduationCap size={32} />
            </div>
            <h2 className="text-4xl font-bold">My Academic Journey</h2>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Academic Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl overflow-hidden border-l-4 border-l-accent"
            >
              <details className="group">
                <summary className="cursor-pointer p-8 hover:bg-white/[0.05] transition-all list-none flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Code2 size={28} className="text-accent" />
                    <h3 className="text-2xl font-bold">Academic Projects</h3>
                  </div>
                  <motion.div
                    className="text-accent"
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 90 }}
                  >
                    <ArrowRight size={24} className="group-open:rotate-90 transition-transform" />
                  </motion.div>
                </summary>
                <div className="px-8 pb-8 space-y-6">
                  {resumeData.academicJourney.projects.map((project, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="glass p-6 rounded-xl hover:bg-white/[0.05] transition-all"
                    >
                      <h4 className="text-xl font-bold mb-3 text-accent">{project.title}</h4>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, j) => (
                          <span 
                            key={j}
                            className="px-3 py-1 bg-accent/10 rounded-lg text-xs font-mono border border-accent/30 text-accent"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </details>
            </motion.div>

            {/* Conferences & Publications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl overflow-hidden border-l-4 border-l-primary"
            >
              <details className="group">
                <summary className="cursor-pointer p-8 hover:bg-white/[0.05] transition-all list-none flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Trophy size={28} className="text-primary" />
                    <h3 className="text-2xl font-bold">Publications & Conference Papers</h3>
                  </div>
                  <motion.div
                    className="text-primary"
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 90 }}
                  >
                    <ArrowRight size={24} className="group-open:rotate-90 transition-transform" />
                  </motion.div>
                </summary>
                <div className="px-8 pb-8 space-y-6">
                  {resumeData.academicJourney.conferences.map((conf, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="glass p-6 rounded-xl hover:bg-white/[0.05] transition-all"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-xl font-bold text-primary flex-1">{conf.title}</h4>
                        <span className="px-3 py-1 glass rounded-full text-sm font-mono text-primary">{conf.date}</span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3">
                        <span className="font-semibold text-foreground">Authors:</span> {conf.authors}
                      </p>
                      
                      <p className="text-sm text-muted-foreground mb-4">
                        <span className="font-semibold text-foreground">Affiliation:</span> {conf.affiliation}
                      </p>
                      
                      <div className="mb-4 p-4 bg-white/[0.02] rounded-lg border border-white/5">
                        <p className="text-sm font-semibold text-accent mb-2">Abstract:</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{conf.abstract}</p>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-foreground mb-2">Keywords:</p>
                        <div className="flex flex-wrap gap-2">
                          {conf.keywords.split(', ').map((keyword, j) => (
                            <span 
                              key={j}
                              className="px-3 py-1 bg-primary/10 rounded-lg text-xs font-mono border border-primary/30 text-primary"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-lg font-semibold text-accent mb-2">{conf.conference}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                        {conf.organizer}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Held during <span className="text-foreground font-medium">{conf.period}</span>
                      </p>
                    </motion.div>
                  ))}
                </div>
              </details>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-16 flex items-center gap-4">
            <span className="w-12 h-1 bg-accent rounded-full" />
            Featured Projects
          </h2>
          
          {/* 3D Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resumeData.projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: "spring" }}
                className="group"
              >
                <motion.div 
                  className="relative h-[560px]"
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                >
                  {/* Card Container */}
                  <div className="rounded-3xl overflow-hidden h-full flex flex-col relative border border-white/20 group-hover:border-accent/60 transition-all duration-500 shadow-2xl group-hover:shadow-accent/40 bg-background/80 backdrop-blur-xl">
                    
                    {/* Project Image Section - Fixed Height */}
                    <div className="relative w-full flex-shrink-0 overflow-hidden" style={{ height: '224px' }}>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        style={{ objectPosition: 'center 35%' }}
                      />
                      {/* Lighter overlay for better image visibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                      
                      {/* Live Badge - Top Left */}
                      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-xs font-mono border border-green-400/50">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                        <span className="uppercase tracking-wider font-semibold text-green-400">LIVE</span>
                      </div>
                      
                      {/* External Link - Top Right */}
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 p-3 bg-black/60 backdrop-blur-md rounded-full hover:bg-accent/80 transition-all group/btn border border-white/30 hover:border-accent hover:scale-110"
                      >
                        <ExternalLink size={18} className="text-white group-hover/btn:text-white transition-colors" />
                      </a>
                    </div>
                    
                    {/* Content Section */}
                    <div className="relative z-10 px-6 pt-6 pb-10 flex flex-col flex-1 min-h-0">
                      {/* Title */}
                      <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>

                      {/* Status Label */}
                      <div className="mb-4">
                        <span className="text-xs font-mono text-accent uppercase tracking-widest font-semibold">
                          {project.status}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, j) => (
                          <motion.span 
                            key={j}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-3 py-1.5 bg-primary/10 rounded-lg text-xs font-mono border border-primary/30 text-primary hover:border-accent hover:bg-accent/10 hover:text-accent transition-all cursor-default"
                          >
                            {t}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Subtle bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* 3D Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-accent/20 rounded-3xl blur-2xl -z-10 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-12 transition-all duration-500" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="p-3 glass rounded-2xl text-accent">
              <GraduationCap size={32} />
            </div>
            <h2 className="text-4xl font-bold">Education</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {resumeData.education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl border-t-4 border-t-accent"
              >
                <span className="text-sm font-mono text-accent mb-2 block">{edu.period}</span>
                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-muted-foreground">{edu.school}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-white/[0.02]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Languages & Core", icon: Terminal, skills: resumeData.skills.languages },
              { title: "Frameworks & Libs", icon: Monitor, skills: resumeData.skills.frameworks },
              { title: "Tools & Platforms", icon: Database, skills: [...resumeData.skills.tools, ...resumeData.skills.platforms] }
            ].map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-2xl hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 glass rounded-xl text-primary">
                    <group.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, j) => {
                    const iconMap: Record<string, { name: string; variant: string }> = {
                      'HTML': { name: 'html5', variant: 'plain' },
                      'CSS': { name: 'css3', variant: 'plain' },
                      'JavaScript': { name: 'javascript', variant: 'original' },
                      'Python': { name: 'python', variant: 'original' },
                      'ReactJS': { name: 'react', variant: 'original' },
                      'Next.js': { name: 'nextjs', variant: 'original' },
                      'Node.js': { name: 'nodejs', variant: 'original' },
                      'Angular': { name: 'angularjs', variant: 'original' },
                      'TailwindCSS': { name: 'tailwindcss', variant: 'original' },
                      'MongoDB': { name: 'mongodb', variant: 'original' },
                      'Docker': { name: 'docker', variant: 'original' },
                      'Git': { name: 'git', variant: 'original' },
                      'VS Code': { name: 'vscode', variant: 'original' },
                      'Cursor': { name: 'vscode', variant: 'original' },
                      'Linux': { name: 'linux', variant: 'original' },
                      'Windows': { name: 'windows8', variant: 'original' },
                      'Google Cloud': { name: 'googlecloud', variant: 'original' },
                      'CI/CD': { name: 'github', variant: 'original' }
                    };
                    
                    const iconInfo = iconMap[skill] || { name: skill.toLowerCase().replace(/\s+/g, ''), variant: 'original' };
                    
                    return (
                      <div 
                        key={j} 
                        className="px-4 py-3 glass rounded-xl text-sm hover:text-primary hover:border-primary transition-all cursor-default flex items-center gap-3"
                      >
                        <img 
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconInfo.name}/${iconInfo.name}-${iconInfo.variant}.svg`}
                          alt={skill}
                          className="w-5 h-5"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <span>{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-24 px-6 border-t border-white/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-16 flex items-center gap-4">
            <span className="w-12 h-1 bg-primary rounded-full" />
            Awards & Recognitions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resumeData.awards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-2xl border-b-4 border-b-accent hover:bg-white/[0.05] transition-all"
              >
                <div className="p-2 glass rounded-lg w-fit text-accent mb-4">
                  <Trophy size={20} />
                </div>
                <h3 className="font-bold mb-1">{award.title}</h3>
                <p className="text-sm text-primary mb-2">{award.org}</p>
                <span className="text-xs text-muted-foreground font-mono">{award.date}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full -z-10" />
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-8">Let's build something <span className="text-[hsl(189,87%,53%)]">incredible</span> together.</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
              Currently open for new opportunities and collaborations in web development and AI research.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <Button size="lg" className="rounded-full px-12 h-16 text-lg btn-glow" asChild>
                <a href={`mailto:${resumeData.email}`}>Say Hello</a>
              </Button>
            </div>
            
            <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
              <p className="text-muted-foreground font-mono">© 2026 {resumeData.name}. All rights reserved.</p>
              <div className="flex gap-8">
                {['Github', 'Linkedin', 'Twitter'].map((social) => (
                  <a key={social} href="#" className="text-sm uppercase tracking-widest font-bold hover:text-primary transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}