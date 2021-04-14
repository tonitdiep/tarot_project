class CardSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :meaning_upright, :meaning_reverse, :suit_id
    # belongs_to :suit
end