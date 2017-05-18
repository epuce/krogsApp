class Picture < ActiveRecord::Base
  has_attached_file :name, path: 'app/assets/images/gallery/:filename', url: 'gallery/:filename'
  validates_attachment_content_type :name, content_type: /\Aimage\/.*\z/
end