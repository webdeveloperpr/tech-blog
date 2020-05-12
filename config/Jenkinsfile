pipeline {
  agent any
  environment {
  }
  parameters {
  }
  stages {
    stage('environment') {
      steps {
        // Get the secrets from Github.
      }
   }
    stage('test') {
      steps {
          //  Run Frontend/Backend tests
      }
    }
    stage('cloud') {
      steps {
          //  create/update cloudformation
      }
    }
    stage('build') {
      steps {
        //  Build Frontend/Backend  
      }
    }
    stage('deploy') {
      steps {
        // Deploy to EC2 instance or ECS 
      }
    }
  }
  post {
    always {
      echo 'Cleaning the workspace.'
      cleanWs()
    }
    success {
      echo 'Done!'
    }
    failure {
      echo 'Done!'
    }
  }
}