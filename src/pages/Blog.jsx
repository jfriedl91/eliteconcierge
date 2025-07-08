import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageWrapper from '@/components/PageWrapper';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/articles';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const BlogPage = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Blog | Elite Concierge</title>
        <meta name="description" content="Entdecken Sie Einblicke in die Welt des Luxus, exklusive Reiseziele und den erstklassigen Service von Elite Concierge. Unser Blog hält Sie auf dem Laufenden." />
        <link rel="canonical" href="https://elconci.de/blog" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="relative bg-background text-platinum pt-32 pb-20 px-4 sm:px-6 lg:pt-40 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-black h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl tracking-tight font-extrabold text-gold sm:text-5xl md:text-6xl font-serif">
              Einblicke in die Exklusivität
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-platinum/80 sm:mt-4">
              Die neuesten Artikel, Geschichten und Einblicke aus der Welt von Elite Concierge.
            </p>
          </motion.div>
          <motion.div 
            className="mt-12 max-w-lg mx-auto grid gap-6 lg:gap-8 lg:grid-cols-3 lg:max-w-none"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {blogPosts.map((post) => (
              <motion.div key={post.id} variants={itemVariants}>
                <Card className="flex flex-col overflow-hidden h-full bg-secondary border-gold/20 hover:border-gold/50 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex-shrink-0">
                    <img  className="h-48 w-full object-cover" alt={post.title} src={post.image} loading="lazy" decoding="async" />
                  </div>
                  <CardContent className="flex-grow p-4 sm:p-6">
                    <p className="text-sm font-medium text-gold">
                      {post.category}
                    </p>
                    <CardTitle className="mt-2 text-xl font-semibold text-platinum font-serif">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="mt-3 text-base text-platinum/70">
                      {post.excerpt}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="p-4 sm:p-6 pt-0">
                    <Link to={`/blog/${post.slug}`} className="w-full">
                      <Button variant="outline" className="w-full text-gold border-gold/50 hover:bg-gold hover:text-background transition-colors duration-300">
                        Weiterlesen <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default BlogPage;