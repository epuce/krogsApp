class Maintext < ActiveRecord::Base
  validates :text, :order, presence: {message: "lauks nedrīkst būt tukšs"}
  validates :order, uniqueness: {message: "ieraksts ar šādu secības numerāciju jau eksistē"}
  validates :text, uniqueness: {message: "ieraksts ar šādu tekstu jau eksistē"}
end
