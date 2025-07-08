import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts as initialBlogPosts } from '@/data/articles';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Save } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';

const BlogEditPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [post, setPost] = useState(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    const foundPost = initialBlogPosts.find((p) => p.slug === slug);
    if (foundPost) {
      setPost(foundPost);
      setContent(foundPost.content);
    } else {
      navigate('/blog');
    }
  }, [slug, navigate]);

  const handleSave = () => {
    console.log('Saving post:', { ...post, content });
    toast({
      title: 'Erfolgreich gespeichert!',
      description: `Der Beitrag "${post.title}" wurde aktualisiert. Hinweis: Die Daten werden derzeit nur lokal gespeichert.`,
      variant: 'success',
    });
    
  };

  if (!post) {
    return (
      <PageWrapper>
        <div className="text-center py-40 text-platinum">Lade Beitrag...</div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>Bearbeiten: {post.title} | Admin</title>
      </Helmet>
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-gold mb-8">
            Beitrag bearbeiten
          </h1>
          <div className="space-y-6">
            <div>
              <Label htmlFor="title" className="text-platinum">Titel</Label>
              <Input
                id="title"
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                className="mt-1 bg-secondary border-gold/30 text-platinum"
              />
            </div>
            <div>
              <Label htmlFor="excerpt" className="text-platinum">Auszug</Label>
              <Textarea
                id="excerpt"
                value={post.excerpt}
                onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
                className="mt-1 bg-secondary border-gold/30 text-platinum"
              />
            </div>
            <div>
              <Label htmlFor="content" className="text-platinum">Inhalt (HTML)</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="mt-1 bg-secondary border-gold/30 text-platinum"
                rows={20}
              />
            </div>
            <div className="flex justify-end">
              <Button onClick={handleSave} className="bg-gold text-background hover:bg-gold/90">
                <Save className="mr-2 h-4 w-4" />
                Änderungen speichern
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default BlogEditPage;