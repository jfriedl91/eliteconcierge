import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageWrapper from '@/components/PageWrapper';
import { blogPosts } from '@/data/articles';
import { motion } from 'framer-motion';
import { ArrowLeft, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const BlogPostPage = () => {
  const { slug } = useParams();
  const { isAuthenticated } = useAuth();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <PageWrapper>
        <div className="text-center py-40">
          <h1 className="text-4xl font-bold text-gold">Beitrag nicht gefunden</h1>
          <p className="text-platinum mt-4">Der von Ihnen gesuchte Beitrag existiert nicht.</p>
          <Link to="/blog">
            <Button className="mt-8">Zurück zum Blog</Button>
          </Link>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>{post.title} | Elite Concierge Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://elconci.de/blog/${post.slug}`} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="bg-background">
        <div className="pt-32 pb-16">
          <div className="relative">
            <div className="absolute inset-x-0 h-1/2 bg-secondary" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img  className="h-full w-full object-cover" alt={`Featured image for ${post.title}`} src={post.featuredImage} loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>
                <motion.div 
                  className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="text-sm font-semibold text-gold uppercase tracking-wide">{post.category}</p>
                  <h1 className="mt-2 text-4xl font-extrabold font-serif tracking-tight text-platinum sm:text-5xl lg:text-6xl">
                    {post.title}
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-xl text-platinum/80">
                    {post.author} • {post.date}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="relative py-16 bg-background overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
              <div 
                className="prose prose-invert prose-lg text-platinum/80 mx-auto prose-headings:font-serif prose-headings:text-gold prose-a:text-gold hover:prose-a:text-gold/80 prose-strong:text-platinum"
                dangerouslySetInnerHTML={{ __html: post.content }} 
              />
            </div>
          </div>
          <div className="text-center mt-16 flex justify-center gap-4">
            <Link to="/blog">
              <Button variant="outline" className="text-gold border-gold/50 hover:bg-gold hover:text-background transition-colors duration-300">
                <ArrowLeft className="mr-2 h-4 w-4" /> Zurück zum Blog
              </Button>
            </Link>
            {isAuthenticated && (
              <Link to={`/admin/blog/${post.slug}`}>
                <Button variant="default" className="bg-gold text-background hover:bg-gold/90 transition-colors duration-300">
                  <Edit className="mr-2 h-4 w-4" /> Beitrag bearbeiten
                </Button>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default BlogPostPage;