class Group < ActiveRecord::Base
  has_many :foods
  has_many :subgroups
  # validates :text, presence: true
end
