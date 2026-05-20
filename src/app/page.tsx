"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Award, CheckCircle, Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="small"
        sizing="largeSmall"
        background="none"
        cardStyle="layered-gradient"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Services", id: "features" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Hamza Enterprises"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{ variant: "plain" }}
      logoText="HAMZA ENTERPRISES"
      description="Multifaceted contractors and interior design experts based in Delhi, serving all India with world-class craftsmanship in furniture, CNC cutting, and 3D architectural solutions."
      buttons={[
        { text: "Contact Us", href: "#contact" },
        { text: "Learn More", href: "#about" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/single-orange-table-tennis-ball-against-solid-black-background_1308-189582.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Crafting Excellence Since Our Inception"
      description="Hamza Enterprises is your premier partner for construction and home interior needs. We specialize in bespoke furniture for homes, hotels, and stations, delivering precision-engineered 2D and 3D designs that redefine your space."
      imageSrc="http://img.b2bpic.net/free-photo/close-up-seller-car-dealership_23-2149106140.jpg"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Interior Construction",          description: "High-end 2D/3D design for doors, kitchens, and ceiling work.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/front-view-carpentry-tool-machine_23-2148748798.jpg" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/male-carpenter-cuts-wood-with-electric-jigsaw-working-with-tree_169016-12891.jpg" }
        },
        {
          title: "CNC Routing Expertise",          description: "Precision 2D and 3D cutting on MDF, HDMR, Plywood, and more.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/elegant-young-woman-coat-with-scarf-near-wooden-wall_23-2148068381.jpg" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/striped-texture-with-highlights-shadows_23-2148179816.jpg" }
        },
        {
          title: "Custom Furniture",          description: "Custom designs for homes, showrooms, hotels, and banquet halls.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/interior-decor-furniture-inspired-by-fruits-vegetables_23-2151361916.jpg" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/part-modern-kitchen-interior-with-oven_169016-19754.jpg" }
        }
      ]}
      showStepNumbers={false}
      title="Comprehensive Services"
      description="Our expertise spans across all aspects of construction, design, and manufacturing."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "500+", title: "Projects Completed", description: "Across homes, hotels, and airports.", icon: Award },
        { id: "m2", value: "15+", title: "Years Experience", description: "Unmatched industry knowledge.", icon: Shield },
        { id: "m3", value: "100%", title: "Client Satisfaction", description: "Committed to perfection.", icon: CheckCircle },
      ]}
      title="Our Project Impact"
      description="Delivering quality results across every corner of India."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      testimonials={[
        { id: "1", name: "Anil Sharma", role: "Hotel Owner", company: "Grand Palace", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/successful-businesswoman-smiling-looking-confident-happy-standing-suit-street-leans-her_1258-193996.jpg" },
        { id: "2", name: "Priya Verma", role: "Architect", company: "VDesigns", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-man-indoors_23-2149734568.jpg" },
        { id: "3", name: "Rahul Mehta", role: "Homeowner", company: "Individual", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/low-angle-business-hand-shake_23-2148480352.jpg" },
        { id: "4", name: "Sita Devi", role: "Manager", company: "City Banquet", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-waitress-standing-with-arms-crossed_107420-12323.jpg" },
        { id: "5", name: "Vikram Singh", role: "Business Owner", company: "Corporate Hub", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-businessman-writing-paper-pinned-corkboard-talking-phone-smiling_176420-6478.jpg" }
      ]}
      title="What Our Clients Say"
      description="Trusted by hundreds of businesses and homeowners across India."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "Where are you located?", content: "We are located at D1/925, Bhalswa Dairy, Delhi." },
        { id: "f2", title: "Do you provide pan-India service?", content: "Yes, we serve clients all across India." },
        { id: "f3", title: "How can I contact you?", content: "You can reach us at +91 8750615350 or email us at Hamzaenterprises040@gmail.com." }
      ]}
      title="Frequently Asked Questions"
      description="Common inquiries about our services and process."
      faqsAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/room-interior-design_23-2148899443.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{ variant: "plain" }}
      tag="Get in touch"
      title="Ready to Start Your Project?"
      description="Let's bring your vision to life. Call us today to discuss your next construction or interior design project."
      buttons={[{ text: "Call Now: 8750615350", href: "tel:+918750615350" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        { title: "Hamza Enterprises", items: [{ label: "About Us", href: "#about" }, { label: "Services", href: "#features" }] },
        { title: "Contact", items: [{ label: "8750615350", href: "tel:+918750615350" }, { label: "Hamzaenterprises040@gmail.com", href: "mailto:Hamzaenterprises040@gmail.com" }] }
      ]}
      bottomLeftText="© 2025 Hamza Enterprises. All rights reserved."
      bottomRightText="D1/925, Bhalswa Dairy, Delhi."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}