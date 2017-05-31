class Picture < ActiveRecord::Base
  has_attached_file :name, path: 'app/assets/images/:filename', url: ':filename', validate_media_type: false
  validates_attachment_content_type :name, content_type: /\Aimage\/.*\z/
end
