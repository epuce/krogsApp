class Group < ActiveRecord::Base
  has_many :foods
  validates :text, presence: true
end
