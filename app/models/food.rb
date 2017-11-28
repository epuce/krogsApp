class Food < ActiveRecord::Base
  validates :name, :price, :group_id, presence: {message: "lauks nedrīkst būt tukšs"}
  validates :name, uniqueness: {message: "ieraksts ar šādu nosaukumu jau eksistē"}
  validates :price, numericality: {greater_than_or_equal_to: 0.05, message: "laukā, skaitlim jābūt pozitīvam"}

  belongs_to :subgroup
end
