class Food < ActiveRecord::Base
  validates :name, :price, :group_id, :order, presence: {message: "lauks nedrīkst būt tukšs"}
  validates :name, uniqueness: {message: "ieraksts ar šādu nosaukumu jau eksistē"}
  validates :order, uniqueness: {message: "ieraksts ar šādu secības numerāciju jau eksistē"}
  validates :price, numericality: {greater_than_or_equal_to: 0.05, message: "laukā, skaitlim jābūt pozitīvam"}

  belongs_to :group
end
