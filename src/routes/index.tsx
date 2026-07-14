import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Settings as SettingsIcon,
  Share2,
  Heart,
  Moon,
  Sun,
  Check,
  Sparkles,
  X,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { useLocalStorage } from "@/lib/use-local-storage";
import {
  STORIES,
  ALL_INTERESTS,
  ALL_AGE_RANGES,
  type AgeRange,
  type Interest,
  type Story,
  formatStory,
  pickStory,
  todayKey,
} from "@/lib/stories";

export const Route = createFileRoute("/")({
  component: Index,
});

const THEME_CLASS: Record<Story["theme"], string> = {
  dawn: "bg-gradient-dawn",
  ember: "bg-gradient-ember",
  forest: "bg-gradient-forest",
  ocean: "bg-gradient-ocean",
  violet: "bg-gradient-violet",
};

interface Profile {
  age: AgeRange | null;
  interests: Interest[];
}

function Index() {
  const [dark, setDark] = useLocalStorage<boolean>("dto:dark", false);
  const [profile, setProfile] = useLocalStorage<Profile>("dto:profile", {
    age: null,
    interests: [],
  });
  const [favorites, setFavorites] = useLocalStorage<string[]>("dto:favorites", []);
  const [seed, setSeed] = useLocalStorage<number>("dto:seed", 0);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [favOpen, setFavOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  const story = useMemo<Story>(() => {
    const key = todayKey() + "#" + seed;
    return pickStory(key, profile.interests, profile.age);
  }, [profile, seed]);

  const dateLabel = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const isFavorite = favorites.includes(story.id);

  const toggleFavorite = () => {
    setFavorites((prev) =>
      prev.includes(story.id) ? prev.filter((x) => x !== story.id) : [...prev, story.id],
    );
    toast(isFavorite ? "Removed from favorites" : "Saved to favorites");
  };

  const share = async () => {
    const text = formatStory(story) + "\n\n— via Defy the Odds";
    if (typeof navigator !== "undefined" && (navigator as Navigator).share) {
      try {
        await (navigator as Navigator).share({ title: "Defy the Odds", text });
        return;
      } catch {
        /* fall through to copy */
      }
    }
    try {
      await navigator.clipboard.writeText(text);
      toast("Copied to clipboard");
    } catch {
      toast("Couldn't copy — try again");
    }
  };

  const revealNext = () => setSeed((s) => s + 1);

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-700 ${THEME_CLASS[story.theme]}`}
    >
      <Toaster />
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 py-8 sm:px-10 sm:py-12">
        {/* Top bar */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Defy the Odds
            </span>
          </div>
          <div className="flex items-center gap-1">
            <IconButton onClick={() => setDark(!dark)} label="Toggle theme">
              {mounted && dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </IconButton>
            <IconButton onClick={() => setFavOpen(true)} label="Favorites">
              <Heart className="h-4 w-4" />
            </IconButton>
            <IconButton onClick={() => setSettingsOpen(true)} label="Settings">
              <SettingsIcon className="h-4 w-4" />
            </IconButton>
          </div>
        </header>

        {/* Story */}
        <main className="flex flex-1 flex-col justify-center py-16">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            {dateLabel}
          </p>
          <p className="mt-3 font-serif text-sm italic text-muted-foreground">
            Today's story
          </p>

          <h1 className="mt-8 font-serif text-4xl font-light leading-[1.2] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            <span className="font-medium text-primary">{story.person}</span>
            <span className="text-foreground/85">
              , who was told by {story.skeptic} that
            </span>
            <span className="italic"> "you'll never {story.lowExpectation},"</span>
            <span className="text-foreground/85"> went on to </span>
            <span className="text-foreground">{story.achievement}.</span>
          </h1>

          <figure className="mt-12 border-l-2 border-primary/60 pl-6">
            <blockquote className="font-serif text-2xl italic leading-snug text-foreground sm:text-3xl">
              "{story.quote}"
            </blockquote>
            <figcaption className="mt-3 text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
              — {story.person}
            </figcaption>
          </figure>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Button onClick={share} variant="default" className="rounded-full">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button onClick={toggleFavorite} variant="outline" className="rounded-full">
              <Heart
                className={`mr-2 h-4 w-4 ${isFavorite ? "fill-current text-primary" : ""}`}
              />
              {isFavorite ? "Saved" : "Save"}
            </Button>
            <button
              onClick={revealNext}
              className="ml-auto text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Reveal another →
            </button>
          </div>
        </main>

        <footer className="pt-8 text-center text-xs text-muted-foreground">
          One story a day. Come back tomorrow.
        </footer>
      </div>

      <SettingsDialog
        open={settingsOpen}
        onOpenChange={setSettingsOpen}
        profile={profile}
        setProfile={setProfile}
      />

      <FavoritesDialog
        open={favOpen}
        onOpenChange={setFavOpen}
        favorites={favorites}
        onRemove={(id) => setFavorites((prev) => prev.filter((x) => x !== id))}
      />
    </div>
  );
}

function IconButton({
  children,
  onClick,
  label,
}: {
  children: React.ReactNode;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
    >
      {children}
    </button>
  );
}

function SettingsDialog({
  open,
  onOpenChange,
  profile,
  setProfile,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  profile: Profile;
  setProfile: (v: Profile | ((p: Profile) => Profile)) => void;
}) {
  const toggleInterest = (i: Interest) => {
    setProfile((p) => ({
      ...p,
      interests: p.interests.includes(i)
        ? p.interests.filter((x) => x !== i)
        : [...p.interests, i],
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl font-normal">Your ritual</DialogTitle>
          <DialogDescription>
            We'll tune each day's story to fit you. Saved on this device.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-2">
          <section>
            <Label className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              Age range
            </Label>
            <div className="mt-3 flex flex-wrap gap-2">
              {ALL_AGE_RANGES.map((a) => {
                const selected = profile.age === a;
                return (
                  <button
                    key={a}
                    onClick={() =>
                      setProfile((p) => ({ ...p, age: selected ? null : a }))
                    }
                    className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                      selected
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-transparent text-foreground hover:bg-secondary"
                    }`}
                  >
                    {a}
                  </button>
                );
              })}
            </div>
          </section>

          <section>
            <Label className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              Interests
            </Label>
            <div className="mt-3 space-y-2">
              {ALL_INTERESTS.map((i) => {
                const checked = profile.interests.includes(i);
                return (
                  <label
                    key={i}
                    className="flex cursor-pointer items-center gap-3 rounded-md p-2 transition-colors hover:bg-secondary"
                  >
                    <Checkbox
                      checked={checked}
                      onCheckedChange={() => toggleInterest(i)}
                    />
                    <span className="text-sm">{i}</span>
                    {checked && <Check className="ml-auto h-4 w-4 text-primary" />}
                  </label>
                );
              })}
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function FavoritesDialog({
  open,
  onOpenChange,
  favorites,
  onRemove,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  favorites: string[];
  onRemove: (id: string) => void;
}) {
  const items = STORIES.filter((s) => favorites.includes(s.id));
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl font-normal">Your library</DialogTitle>
          <DialogDescription>
            {items.length === 0
              ? "Nothing saved yet. Tap the heart on a story you love."
              : `${items.length} saved ${items.length === 1 ? "story" : "stories"}.`}
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[60vh] space-y-4 overflow-y-auto pt-2">
          {items.map((s) => (
            <div key={s.id} className="group rounded-lg border border-border p-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-lg font-medium">{s.person}</h3>
                <button
                  onClick={() => onRemove(s.id)}
                  aria-label="Remove"
                  className="text-muted-foreground opacity-0 transition-opacity hover:text-destructive group-hover:opacity-100"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 font-serif italic text-foreground/80">"{s.quote}"</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Suppress unused-import warning for X in some environments
void X;
