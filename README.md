# sabbasov.com

A personal portfolio website showcasing my projects and experience in Mathematics and Computer Science.

- Built with modern web technologies for a clean, professional presentation.
- Custom SVG favicon and logo are used throughout the site.
- The logo was generated using the included `logo.py` script (not needed for deployment).
- Download my resume at [sabbasov.com/resume](https://sabbasovcom.vercel.app/resume) or from `public/resume.pdf`.

## Tech Stack
- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Theme:** next-themes for dark mode
- **Typography:** Geist Sans & Geist Mono
- **Icons:** Lucide React
- **Analytics:** Vercel Analytics & Speed Insights

## Project Structure
- `/app`: Main application with components and page logic
- `/app/components`: UI components (Hero, Experience, Education, Projects, Skills, Contact, Footer, Header)
- `/app/aeroguard`: Dedicated project page for AeroGuard aviation safety tool
- `/app/airport-traffic-analyzer`: Dedicated project page for Airport Traffic Analyzer ML project
- `/hooks`: Custom React hooks
- `/lib`: Utility functions

## Features
- **Responsive Design:** Fully responsive across all device sizes and orientations
- **Dark Mode:** Smooth dark/light mode toggle with system preference detection
- **Interactive Sections:** 
  - Hero section with tech stack showcase
  - Timeline-based experience and education sections
  - Skills section with competency indicators
  - Featured projects with detailed pages
  - Contact information
- **Performance Optimized:** Fast loading with Next.js static generation
- **Professional Animations:** Smooth transitions using Framer Motion
- **Mobile-First:** Optimized experience on mobile devices

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/sabbasov.com.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## License
MIT License - see the LICENSE file for details.