class Picture < ActiveRecord::Base
  has_attached_file :name, path: 'public/gallery/:filename', url: '/gallery/:filename', validate_media_type: false
  validates_attachment_content_type :name, content_type: /\Aimage\/.*\z/
  validates :order, presence: {message: "lauks nedrīkst būt tukšs"}
  validates :order, uniqueness: {message: "ieraksts ar šādu secības numerāciju jau eksistē"}
end
