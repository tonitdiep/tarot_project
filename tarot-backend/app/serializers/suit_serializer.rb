class SuitSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name
    has_many :cards
end