class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  def parse_address(full_address)
    if full_address[-5..-1] =~ /\d{5}/
      @zip = full_address[-5..-1]
      @address = full_address[0..-5].gsub(/\,*/, '')
    else
      @address, @zip = full_address.split(', ')[0..1]
    end
  end
end
