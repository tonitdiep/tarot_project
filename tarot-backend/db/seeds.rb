# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# https://rws-cards-api.herokuapp.com/api/v1/cards/suits/wands
# https://rws-cards-api.herokuapp.com/api/v1/cards/suits/cups
# https://rws-cards-api.herokuapp.com/api/v1/cards/suits/swords
# https://rws-cards-api.herokuapp.com/api/v1/cards/suits/pentacles




wand = Suit.create(name: "wand")
Card.create(name: "King of Wands", meaning_upright: "Natural-born leader, vision, entrepreneur, honour", meaning_reverse: "Impulsiveness, haste, ruthless, high expectations", suit_id: wand.id)
Card.create(name: "Queen of Wands", meaning_upright: "Courage, confidence, independence, social butterfly, determination", meaning_reverse: "Self-respect, self-confidence, introverted, re-establish sense of self", suit_id: wand.id)
Card.create(name: "Knight of Wands", meaning_upright: "Energy, passion, inspired action, adventure, impulsiveness", meaning_reverse: "Passion project, haste, scattered energy, delays, frustration", suit_id: wand.id)
Card.create(name: "Page of Wands", meaning_upright: "Inspiration, ideas, discovery, limitless potential, free spirit", meaning_reverse: "Newly-formed ideas, redirecting energy, self-limitaing beliefs, a spiritual path", suit_id: wand.id)
Card.create(name: "Ten of Wands", meaning_upright: "Burden, extra responsibility, hard work, completion", meaning_reverse: "Doing it all, carrying the burden, delegation, release", suit_id: wand.id)
Card.create(name: "Nine of Wands", meaning_upright: "Resilience, courage, persistence, test of faith, boundaries", meaning_reverse: "Inner resources, struggle, overwhelm, defensive, paranoia", suit_id: wand.id)
Card.create(name: "Eight of Wands", meaning_upright: "Movement, fast paced change, action, alignment, air travel", meaning_reverse: "Delays, frustration, resisting change, internal alignment", suit_id: wand.id)
Card.create(name: "Seven of Wands", meaning_upright: "Challenge, competition, protection, perseverance", meaning_reverse: "Exhaustion, giving up, overwhelmed", suit_id: wand.id)
Card.create(name: "Six of Wands", meaning_upright: "Success, public recognition, progress, self-confidence", meaning_reverse: "Private achievement, personal definition of success, fall from grace, egotism", suit_id: wand.id)
Card.create(name: "Five of Wands", meaning_upright: "Conflict, disagreements, competition, tension, diversity", meaning_reverse: "Inner conflict, conflict avoidance, tension release", suit_id: wand.id)
Card.create(name: "Four of Wands", meaning_upright: "Celebration, joy, harmony, relaxation, homecoming", meaning_reverse: "Personal celebration, inner harmony, conflict with others, transition", suit_id: wand.id)
Card.create(name: "Three of Wands", meaning_upright: "Progress, expansion, foresight, overseas opportunities", meaning_reverse: "Playing small, lack of foresight, unexpected delays", suit_id: wand.id)
Card.create(name: "Two of Wands", meaning_upright: "Future planning, progress, decisions, discovery", meaning_reverse: "Personal goals, inner alignment, fear of unknown, lack of planning", suit_id: wand.id)
Card.create(name: "Ace of Wands", meaning_upright: "Inspiration, new opportunities, growth, potential", meaning_reverse: "An emerging idea, lack of direction, distractions, delays", suit_id: wand.id)

sword = Suit.create(name: "sword")
Card.create(name: "King of Swords", meaning_upright: "Mental clarity, intellectual power, authority, truth", meaning_reverse: "Quiet power, inner truth, misuse of power, manipulation", suit_id: sword.id)
Card.create(name: "Queen of Swords", meaning_upright: "Independent, unbiased judgement, clear boundaries, direct communication", meaning_reverse: "Overly-emotional, easily influenced, bitchy, cold-hearted", suit_id: sword.id)
Card.create(name: "Knight of Swords", meaning_upright: "Ambitious, action-oriented, driven to succeed, fast-thinking", meaning_reverse: "Restless, unfocused, impulsive, burn-out", suit_id: sword.id)
Card.create(name: "Page of Swords", meaning_upright: "New ideas, curiosity, thirst for knowledge, new ways of communicating", meaning_reverse: "Self-expression, all talk and no action, haphazard action, haste", suit_id: sword.id)
Card.create(name: "Ten of Swords", meaning_upright: "Painful endings, deep wounds, betrayal, loss, crisis", meaning_reverse: "Recovery, regeneration, resisting an inevitable end", suit_id: sword.id)
Card.create(name: "Nine of Swords", meaning_upright: "Anxiety, worry, fear, depression, nightmares", meaning_reverse: "Inner turmoil, deep-seated fears, secrets, releasing worry", suit_id: sword.id)
Card.create(name: "Eight of Swords", meaning_upright: "Negative thoughts, self-imposed restriction, imprisonment, victim mentality", meaning_reverse: "Self-limiting beliefs, inner critic, releasing negative thoughts, open to new perspectives", suit_id: sword.id)
Card.create(name: "Seven of Swords", meaning_upright: "Betrayal, deception, getting away with something, acting strategically", meaning_reverse: "Imposter syndrome, self-deceit, keeping secrets", suit_id: sword.id)
Card.create(name: "Six of Swords", meaning_upright: "Transition, change, rite of passage, releasing baggage", meaning_reverse: "Personal transition, resistance to change, unfinished business", suit_id: sword.id)
Card.create(name: "Five of Swords", meaning_upright: "Conflict, disagreements, competition, defeat, winning at all costs", meaning_reverse: "Reconciliation, making amends, past resentment", suit_id: sword.id)
Card.create(name: "Four of Swords", meaning_upright: "Rest, relaxation, meditation, contemplation, recuperation", meaning_reverse: "Exhaustion, burn-out, deep contemplation, stagnation", suit_id: sword.id)
Card.create(name: "Three of Swords", meaning_upright: "Heartbreak, emotional pain, sorrow, grief, hurt", meaning_reverse: "Negative self-talk, releasing pain, optimism, forgiveness", suit_id: sword.id)
Card.create(name: "Two of Swords", meaning_upright: "Difficult decisions, weighing up options, an impasse, avoidance", meaning_reverse: "Indecision, confusion, information overload, stalemate", suit_id: sword.id)
Card.create(name: "Ace of Swords", meaning_upright: "Breakthroughs, new ideas, mental clarity, success", meaning_reverse: "Inner clarity, re-thinking an idea, clouded judgement", suit_id: sword.id)

cup = Suit.create(name: "cup")
Card.create(name: "King of Cups", meaning_upright: "Emotionally balanced, compassionate, diplomatic", meaning_reverse: "Self-compassion, inner feelings, moodiness, emotionally manipulative", suit_id: cup.id)
Card.create(name: "Queen of Cups", meaning_upright: "Compassionate, caring, emotionally stable, intuitive, in flow", meaning_reverse: "Inner feelings, self-care, self-love, co-dependency", suit_id: cup.id)
Card.create(name: "Knight of Cups", meaning_upright: "Creativity, romance, charm, imagination, beauty", meaning_reverse: "Overactive imagination, unrealistic, jealous, moody", suit_id: cup.id)
Card.create(name: "Page of Cups", meaning_upright: "Creative opportunities, intuitive messages, curiosity, possibility", meaning_reverse: "New ideas, doubting intuition, creative blocks, emotional immaturity", suit_id: cup.id)
Card.create(name: "Ten of Cups", meaning_upright: "Divine love, blissful relationships, harmony, alignment", meaning_reverse: "Disconnection, misaligned values, struggling relationships", suit_id: cup.id)
Card.create(name: "Nine of Cups", meaning_upright: "Contentment, satisfaction, gratitude, wish come true", meaning_reverse: "Inner happiness, materialism, dissatisfaction, indulgence", suit_id: cup.id)
Card.create(name: "Eight of Cups", meaning_upright: "Disappointment, abandonment, withdrawal, escapism", meaning_reverse: "Trying one more time, indecision, aimless drifting, walking away", suit_id: cup.id)
Card.create(name: "Seven of Cups", meaning_upright: "Opportunities, choices, wishful thinking, illusion", meaning_reverse: "Alignment, personal values, overwhelmed by choices", suit_id: cup.id)
Card.create(name: "Six of Cups", meaning_upright: "Revisiting the past, childhood memories, innocence, joy", meaning_reverse: "Living in the past, forgiveness, lacking playfulness", suit_id: cup.id)
Card.create(name: "Five of Cups", meaning_upright: "Regret, failure, disappointment, pessimism", meaning_reverse: "Personal setbacks, self-forgiveness, moving on", suit_id: cup.id)
Card.create(name: "Four of Cups", meaning_upright: "Meditation, contemplation, apathy, reevaluation", meaning_reverse: "Retreat, withdrawal, checking in for alignment", suit_id: cup.id)
Card.create(name: "Three of Cups", meaning_upright: "Celebration, friendship, creativity, collaborations", meaning_reverse: "Independence, alone time, hardcore partying, ‘three’s a crowd’", suit_id: cup.id)
Card.create(name: "Two of Cups", meaning_upright: "Unified love, partnership, mutual attraction", meaning_reverse: "Self-love, break-ups, disharmony, distrust", suit_id: cup.id)
Card.create(name: "Ace of Cups", meaning_upright: "Love, new relationships, compassion, creativity", meaning_reverse: "Self-love, intuition, repressed emotions", suit_id: cup.id)

pentacle = Suit.create(name: "pentacle")
Card.create(name: "King of Pentacles", meaning_upright: "Wealth, business, leadership, security, discipline, abundance", meaning_reverse: "Financially inept, obsessed with wealth and status, stubborn", suit_id: pentacle.id)
Card.create(name: "Queen of Pentacles", meaning_upright: "Nurturing, practical, providing financially, a working parent", meaning_reverse: "Financial independence, self-care, work-home conflict", suit_id: pentacle.id)
Card.create(name: "Knight of Pentacles", meaning_upright: "Hard work, productivity, routine, conservatism", meaning_reverse: "Self-discipline, boredom, feeling ‘stuck’, perfectionism", suit_id: pentacle.id)
Card.create(name: "Page of Pentacles", meaning_upright: "Manifestation, financial opportunity, skill development", meaning_reverse: "Lack of progress, procrastination, learn from failure", suit_id: pentacle.id)
Card.create(name: "Ten of Pentacles", meaning_upright: "Wealth, financial security, family, long-term success, contribution", meaning_reverse: "The dark side of wealth, financial failure or loss", suit_id: pentacle.id)
Card.create(name: "Nine of Pentacles", meaning_upright: "Abundance, luxury, self-sufficiency, financial independence", meaning_reverse: "Self-worth, over-investment in work, hustling", suit_id: pentacle.id)
Card.create(name: "Eight of Pentacles", meaning_upright: "Apprenticeship, repetitive tasks, mastery, skill development", meaning_reverse: "Self-development, perfectionism, misdirected activity", suit_id: pentacle.id)
Card.create(name: "Seven of Pentacles", meaning_upright: "Long-term view, sustainable results, perseverance, investment", meaning_reverse: "Lack of long-term vision, limited success or reward", suit_id: pentacle.id)
Card.create(name: "Six of Pentacles", meaning_upright: "Giving, receiving, sharing wealth, generosity, charity", meaning_reverse: "Self-care, unpaid debts, one-sided charity", suit_id: pentacle.id)
Card.create(name: "Five of Pentacles", meaning_upright: "Financial loss, poverty, lack mindset, isolation, worry", meaning_reverse: "Recovery from financial loss, spiritual poverty", suit_id: pentacle.id)
Card.create(name: "Four of Pentacles", meaning_upright: "Saving money, security, conservatism, scarcity, control", meaning_reverse: "Over-spending, greed, self-protection", suit_id: pentacle.id)
Card.create(name: "Three of Pentacles", meaning_upright: "Teamwork, collaboration, learning, implementation", meaning_reverse: "Disharmony, misalignment, working alone", suit_id: pentacle.id)
Card.create(name: "Two of Pentacles", meaning_upright: "Multiple priorities, time management, prioritisation, adaptability", meaning_reverse: "Over-committed, disorganisation, reprioritisation", suit_id: pentacle.id)
Card.create(name: "Ace of Pentacles", meaning_upright: "A new financial or career opportunity, manifestation, abundance", meaning_reverse: "Lost opportunity, lack of planning and foresight", suit_id: pentacle.id)