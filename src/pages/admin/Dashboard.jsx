import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import PageWrapper from '@/components/PageWrapper';
import { Users, FileText, ShieldAlert } from 'lucide-react';

const AdminDashboardPage = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Admin Dashboard | ELCONCI</title>
      </Helmet>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gold">Admin Dashboard</h1>
            <p className="text-platinum/70">Wählen Sie einen Bereich zur Verwaltung aus.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Link to="/admin/mitglieder">
            <Card className="bg-secondary border-gold/20 hover:border-gold transition-all duration-300 h-full">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Users className="w-8 h-8 text-gold" />
                  <div>
                    <CardTitle>Mitglieder verwalten</CardTitle>
                    <CardDescription>Benutzer anlegen, einsehen und verwalten.</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-platinum/80">Klicken Sie hier, um zur Mitgliederübersicht zu gelangen.</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/admin/blog/new-post">
            <Card className="bg-secondary border-gold/20 hover:border-gold transition-all duration-300 h-full">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <FileText className="w-8 h-8 text-gold" />
                  <div>
                    <CardTitle>Blog verwalten</CardTitle>
                    <CardDescription>Bestehende Blogeinträge bearbeiten.</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-platinum/80">Klicken Sie hier, um die Blogeinträge zu verwalten.</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="mt-8">
          <Card className="bg-secondary border-gold/20">
            <CardHeader>
              <div className="flex items-center gap-4">
                <ShieldAlert className="w-8 h-8 text-gold" />
                <div>
                  <CardTitle>Admin-Passwort ändern</CardTitle>
                  <CardDescription>Wichtiger Sicherheitshinweis</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-platinum/80">
                Ihr Admin-Passwort ist eine sensible Information, die in den Umgebungsvariablen Ihres Hostings gespeichert ist (`VITE_ADMIN_PASSWORD`).
                Um es zu ändern, müssen Sie sich bei Ihrem Hosting-Anbieter einloggen und den Wert dieser Variable direkt in den Einstellungen Ihrer Webseite anpassen.
              </p>
            </CardContent>
          </Card>
        </div>

      </div>
    </PageWrapper>
  );
};

export default AdminDashboardPage;