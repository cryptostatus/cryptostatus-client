lock '3.7.2'

set :application, 'cryptostatus-client'
set :repo_url, 'git@github.com:kirillshevch/cryptostatus-client.git'

set :use_sudo, false
set :deploy_via, :copy
set :keep_releases, 2

set :log_level, :debug
set :pty, false

set :linked_dirs, %w[node_modules]
set :linked_files, %w['.env']

namespace :deploy do
  desc 'Build frontend'
  task :build_assets do
    on roles(:web) do
      within release_path do
        execute :npm, 'install'
        execute :npm, 'run build'
      end
    end
  end

  desc 'Uploads required config files'
  task :upload_configs do
    on roles(:all) do
      upload!(".env.#{fetch(:stage)}", "#{deploy_to}/shared/.env")
    end
  end

  before :finished, 'deploy:build_assets'
end
