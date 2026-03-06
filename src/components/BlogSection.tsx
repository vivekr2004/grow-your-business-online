import { ArrowUpRight } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const posts = [
  { img: blog1, title: "Why Your Client Needs a Responsive Website", date: "April 30, 2025" },
  { img: blog2, title: "Communication Between Departments", date: "April 30, 2025" },
  { img: blog3, title: "Best Prototyping Tools for Designers", date: "April 30, 2025" },
];

const BlogSection = () => (
  <section id="blog" className="bg-background py-20 md:py-28">
    <div className="section-padding">
      <div className="text-center mb-16">
        <h2 className="heading-lg text-foreground">Read The Blog To Learn More About Us</h2>
        <p className="text-muted-foreground max-w-lg mx-auto mt-4">
          The Digital Innovation Studio, a haven where innovation thrives and digital possibilities unfold endlessly.
        </p>
        <a
          href="#blog"
          className="inline-flex items-center gap-2 mt-6 border border-foreground/30 text-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
        >
          <span>✦</span> Read All Articles
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <article key={i} className="group">
            <div className="rounded-xl overflow-hidden mb-4">
              <img src={post.img} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
            </div>
            <h3 className="font-heading font-bold text-foreground uppercase text-sm mb-2">{post.title}</h3>
            <p className="text-muted-foreground text-sm mb-3">The Digital Innovation Studio, a haven innovation…</p>
            <div className="flex items-center justify-between">
              <a href="#" className="text-xs font-bold uppercase text-foreground flex items-center gap-1 hover:text-primary transition-colors">
                Read More <ArrowUpRight size={14} />
              </a>
              <span className="text-xs text-muted-foreground">{post.date}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
